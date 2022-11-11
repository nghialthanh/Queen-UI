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
import { dataCityVN } from "helpers/data";
function App() {
    const [_value, _setValue] = useState("");
    const [_value1, _setValue1] = useState(false);
    const [notifyFilter, setNotifyFilter] = useState(false);
    const [placeCity, setPlaceCity] = useState();

    return (
        <div className="App __qsetting_all ">
            <header
                className="App-header"
                style={{
                    padding: "3rem 5rem",
                    width: "50vw",
                    border: "1px solid black",
                    margin: "2rem",
                }}
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
                        Submit
                    </QButton>
                    <QButton mode="2" color="orange">
                        <RiUserHeartLine />
                        Button
                    </QButton>
                </div>

                <div
                    style={{
                        height: "30px",
                        padding: "1.5rem 0",
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                    }}
                >
                    <QLoading width="80" height="80" color="green" length="4" />
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
                        Male
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
                        mode={"circle"}
                    >
                        Female
                    </QRadio>
                </div>
                <div style={{ height: "30px" }}></div>
                <div style={{ height: "30px" }}></div>
                <div style={{ height: "30px" }}></div>
                <QSelect
                    data={optionQSelect(dataCityVN, "code", "name")}
                    placeholder="Chọn bộ lọc đã lưu ..."
                    value={placeCity}
                    onChange={setPlaceCity}
                    // bordercolor={"1"}
                    style={{ marginBottom: "10px" }}
                    color="purple"
                />

                <QSelect
                    data={optionQSelect(dataCityVN, "code", "name")}
                    placeholder="Chọn bộ lọc đã lưu ..."
                    value={placeCity}
                    onChange={setPlaceCity}
                    // bordercolor={"1"}
                    color="orange"
                    mode={"multiple"}
                />

                <div style={{ height: "1020px" }}></div>
            </header>
        </div>
    );
}

export default App;
