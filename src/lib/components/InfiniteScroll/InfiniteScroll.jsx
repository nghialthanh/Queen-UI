import React, { useState, useEffect, forwardRef } from "react";
import _ from "lodash";
function QInfiniteScroll(props, ref) {
    // props: getData: takemore data list
    //        idScroll: id of element have scroll
    //        hasMore: infiniteList keep fetch data or not
    //        className: className container
    //        style: style container
    //        endMessage: show messeage when data is over
    //        loader:  component loading when load data
    //        children

    const [__loadMore, __setLoadMore] = useState(false);

    const handleScroll = _.throttle(() => {
        let list = window;
        if (props.idScroll) {
            list = document.getElementById(props.idScroll);
            let heightNotDisplay = list.scrollHeight - list.clientHeight;
            if (list.scrollTop / heightNotDisplay >= 0.9) {
                if (props.hasMore) __setLoadMore(true);
            }
        } else {
            let heightNotDisplay =
                list.innerHeight + document.documentElement.scrollTop;
            if (
                heightNotDisplay / document.documentElement.offsetHeight >=
                0.95
            ) {
                if (props.hasMore) __setLoadMore(true);
            }
        }
    }, 1000);

    useEffect(() => {
        getData(__loadMore);
    }, [__loadMore]);

    useEffect(() => {
        // list has auto height
        let list = window;
        if (props.idScroll && document.getElementById(props.idScroll))
            list = document.getElementById(props.idScroll);
        if (props.hasMore) {
            list.addEventListener("scroll", handleScroll);
        } else list.removeEventListener("scroll", handleScroll);
        return () => list.removeEventListener("scroll", handleScroll);
    }, [props.hasMore]);

    const getData = async (load) => {
        if (load) {
            await props.getData();
            __setLoadMore(false);
        }
    };

    return (
        <div className={props.className || ""} ref={ref} style={props.style}>
            {props.children}
            {__loadMore && props.loader && props.loader}
            {props.endMessage && !props.hasMore && props.endMessage}
        </div>
    );
}
export default forwardRef(QInfiniteScroll);
