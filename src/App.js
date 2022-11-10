import React, { useState } from "react";
import QButton from "components/Button/Button";
import QInput from "components/Input/Input";
import { FaBeer } from "react-icons/fa";
import QLoading from "components/Loading/Loading";
import QRadio from "components/Radio/Radio";
import QCheckBox from "components/Checkbox/Checkbox";
import { optionQSelect } from "helpers/basicFunc";
import QSelect from "components/Select/Select";
import QInfiniteScroll from "components/InfiniteScroll/InfiniteScroll";
import { RiUserHeartLine } from "react-icons/ri";
function App() {
    const [_value, _setValue] = useState("");
    const [_value1, _setValue1] = useState(false);
    const [notifyFilter, setNotifyFilter] = useState(false);
    const [placeCity, setPlaceCity] = useState();
    const [_test, _setTest] = useState([...test]);
    function timeout(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }

    const LoadingData = async () => {
        await timeout(3000);
        _setTest((old) => [
            ...old,
            ...dataCityVN.slice(old.length, old.length + 5),
        ]);
        console.log(_test.length);
    };

    const rednerTP = () => {
        return _test.map((e) => {
            return (
                <div
                    key={e.code}
                    style={{
                        height: "30px",
                        border: "1px solid black",
                        marginBottom: "5px",
                    }}
                >
                    {e.name}
                </div>
            );
        });
    };

    return (
        <div className="App __qsetting_all ">
            <header
                className="App-header"
                style={{ padding: "3rem 5rem", width: "50vw" }}
            >
                <div
                    style={{
                        height: "35px",
                        padding: "1.5rem 0",
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-around",
                    }}
                >
                    <QInput
                        value={_value}
                        onChange={(e) => _setValue(e.target.value)}
                        color="blue"
                        placeholder="Search...."
                        bordercolor={"1"}
                        boxShadow={false}
                    />
                    <QInput
                        value={_value}
                        onChange={(e) => _setValue(e.target.value)}
                        color="orange"
                        placeholder="Search...."
                        icon={
                            <span>
                                M<sup>2</sup>
                            </span>
                        }
                        bordercolor={"0"}
                    />
                    <QInput
                        value={_value}
                        onChange={(e) => _setValue(e.target.value)}
                        color="purple"
                        placeholder="Search...."
                        icon={<RiUserHeartLine />}
                        bordercolor={"2"}
                    />
                </div>
                <div
                    style={{
                        height: "30px",
                        padding: "1.5rem 0",
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-around",
                    }}
                >
                    <QButton>
                        <RiUserHeartLine />
                        Nghĩa
                    </QButton>
                    <QButton mode="2" color="orange">
                        <RiUserHeartLine />
                        Nghĩa
                    </QButton>
                </div>

                <div style={{ height: "30px" }}></div>
                <QLoading width="80" height="80" color="green" length="4" />
                <div style={{ height: "30px" }}></div>
                <QRadio
                    value={_value1}
                    checked={_value1}
                    name={"radio1"}
                    color="purple"
                    onChange={() => {
                        _setValue1((old) => !old);
                        console.log(_value1);
                    }}
                >
                    {_value}
                </QRadio>
                <QRadio
                    color="green"
                    value={_value}
                    checked={!_value1}
                    name={"radio1"}
                    onChange={() => {
                        _setValue1((old) => !old);
                        console.log(_value1);
                    }}
                    mode
                >
                    {_value}
                </QRadio>
                <div style={{ height: "30px" }}></div>
                <div style={{ height: "30px" }}></div>
                <QSelect
                    data={optionQSelect(dataCityVN_All, "code", "name")}
                    placeholder="Chọn bộ lọc đã lưu ..."
                    value={placeCity}
                    onChange={setPlaceCity}
                    // bordercolor={"1"}
                    color="green"
                    mode={"multiple"}
                />

                <div style={{ height: "20px" }}></div>
                <div
                    id="test-list"
                    style={{
                        width: "50vw",
                        height: "auto",
                        maxHeight: "150px",
                        overflow: "auto",
                    }}
                >
                    <QInfiniteScroll
                        getData={LoadingData}
                        hasMore={_test.length < 15}
                        idScroll={"test-list"}
                        endMessage={<span>Hết con mẹ mày rồi</span>}
                        loader={<span>Loading</span>}
                    >
                        {rednerTP()}
                    </QInfiniteScroll>
                </div>
                {/* <InfiniteList
                    state={_dataNotify.list_notify}
                    getData={LoadingData}
                    idScroll={"notify-list"}
                    hasMore={
                        _dataNotify.list_notify.length < _dataNotify.total_count
                    }
                >
                    {renderNotify()}
                </InfiniteList> */}
            </header>
        </div>
    );
}

export default App;

let test = [
    {
        name: "Hà Nội",
        slug: "ha-noi",
        type: "thanh-pho",
        name_with_type: "Thành phố Hà Nội",
        code: "3",
    },
    {
        name: "Hồ Chí Minh",
        slug: "ho-chi-minh",
        type: "thanh-pho",
        name_with_type: "Thành phố Hồ Chí Minh",
        code: "1",
    },
    {
        name: "Đà Nẵng",
        slug: "da-nang",
        type: "thanh-pho",
        name_with_type: "Thành phố Đà Nẵng",
        code: "4",
    },
    {
        name: "Cần Thơ",
        slug: "can-tho",
        type: "thanh-pho",
        name_with_type: "Thành phố Cần Thơ",
        code: "5",
    },
    {
        name: "Hải Phòng",
        slug: "hai-phong",
        type: "thanh-pho",
        name_with_type: "Thành phố Hải Phòng",
        code: "2",
    },
    {
        name: "An Giang",
        slug: "an-giang",
        type: "tinh",
        name_with_type: "Tỉnh An Giang",
        code: "58",
    },
    {
        name: "Bà Rịa - Vũng Tàu",
        slug: "ba-ria-vung-tau",
        type: "tinh",
        name_with_type: "Tỉnh Bà Rịa - Vũng Tàu",
        code: "7",
    },
];
const dataCityVN = [
    {
        name: "Hà Nội",
        slug: "ha-noi",
        type: "thanh-pho",
        name_with_type: "Thành phố Hà Nội",
        code: "3",
    },
    {
        name: "Hồ Chí Minh",
        slug: "ho-chi-minh",
        type: "thanh-pho",
        name_with_type: "Thành phố Hồ Chí Minh",
        code: "1",
    },
    {
        name: "Đà Nẵng",
        slug: "da-nang",
        type: "thanh-pho",
        name_with_type: "Thành phố Đà Nẵng",
        code: "4",
    },
    {
        name: "Cần Thơ",
        slug: "can-tho",
        type: "thanh-pho",
        name_with_type: "Thành phố Cần Thơ",
        code: "5",
    },
    {
        name: "Hải Phòng",
        slug: "hai-phong",
        type: "thanh-pho",
        name_with_type: "Thành phố Hải Phòng",
        code: "2",
    },
    {
        name: "An Giang",
        slug: "an-giang",
        type: "tinh",
        name_with_type: "Tỉnh An Giang",
        code: "58",
    },
    {
        name: "Bà Rịa - Vũng Tàu",
        slug: "ba-ria-vung-tau",
        type: "tinh",
        name_with_type: "Tỉnh Bà Rịa - Vũng Tàu",
        code: "7",
    },
    {
        name: "Bắc Giang",
        slug: "bac-giang",
        type: "tinh",
        name_with_type: "Tỉnh Bắc Giang",
        code: "33",
    },
    {
        name: "Bắc Kạn",
        slug: "bac-kan",
        type: "tinh",
        name_with_type: "Tỉnh Bắc Kạn",
        code: "29",
    },
    {
        name: "Bạc Liêu",
        slug: "bac-lieu",
        type: "tinh",
        name_with_type: "Tỉnh Bạc Liêu",
        code: "62",
    },
    {
        name: "Bắc Ninh",
        slug: "bac-ninh",
        type: "tinh",
        name_with_type: "Tỉnh Bắc Ninh",
        code: "6",
    },
    {
        name: "Bến Tre",
        slug: "ben-tre",
        type: "tinh",
        name_with_type: "Tỉnh Bến Tre",
        code: "54",
    },
    {
        name: "Bình Định",
        slug: "binh-dinh",
        type: "tinh",
        name_with_type: "Tỉnh Bình Định",
        code: "45",
    },
    {
        name: "Bình Dương",
        slug: "binh-duong",
        type: "tinh",
        name_with_type: "Tỉnh Bình Dương",
        code: "8",
    },
    {
        name: "Bình Phước",
        slug: "binh-phuoc",
        type: "tinh",
        name_with_type: "Tỉnh Bình Phước",
        code: "19",
    },
    {
        name: "Bình Thuận",
        slug: "binh-thuan",
        type: "tinh",
        name_with_type: "Tỉnh Bình Thuận",
        code: "48",
    },
    {
        name: "Cà Mau",
        slug: "ca-mau",
        type: "tinh",
        name_with_type: "Tỉnh Cà Mau",
        code: "63",
    },
    {
        name: "Cao Bằng",
        slug: "cao-bang",
        type: "tinh",
        name_with_type: "Tỉnh Cao Bằng",
        code: "28",
    },
    {
        name: "Đắk Lắk",
        slug: "dak-lak",
        type: "tinh",
        name_with_type: "Tỉnh Đắk Lắk",
        code: "51",
    },
    {
        name: "Đắk Nông",
        slug: "dak-nong",
        type: "tinh",
        name_with_type: "Tỉnh Đắk Nông",
        code: "52",
    },
    {
        name: "Điện Biên",
        slug: "dien-bien",
        type: "tinh",
        name_with_type: "Tỉnh Điện Biên",
        code: "35",
    },
    {
        name: "Đồng Nai",
        slug: "dong-nai",
        type: "tinh",
        name_with_type: "Tỉnh Đồng Nai",
        code: "10",
    },
];
const dataCityVN_All = [
    {
        name: "Tất cả",
        slug: "Tat-ca",
        type: "thanh-pho",
        name_with_type: "Tất cả",
        code: "-1",
    },
    ...dataCityVN,
];
