<p align="center">
  <a href="https://github.com/nghialthanh/Queen-UI">
    <img width="200" src="https://scontent.fdad2-1.fna.fbcdn.net/v/t39.30808-6/315089725_1331146374328002_4226882032193271592_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_ohc=f3aj9ZJZF_8AX_lwjSk&_nc_ht=scontent.fdad2-1.fna&oh=00_AfAtZ42VX3mzo8Kp8oJ_Nv3aphVm6US6Cm-U0DrQYuBHQA&oe=6372E037"
  </a>
</p>

<h1 align="center">🌼QUEEN UI🌼</h1>
<div align="center">
A simple React UI library designed by an amateur developer, so there are still many shortcomings. And i hope everyone will support and contribute to my first product

</div>

[![](https://scontent.fdad2-1.fna.fbcdn.net/v/t39.30808-6/314438169_1331146364328003_5697509909645412933_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_ohc=02xct9trFvwAX_6sy9L&_nc_ht=scontent.fdad2-1.fna&oh=00_AfA_fFjlQiwJAyTU7obyaA_HBUBAYvt00yHC8uqONjzVyA&oe=63720C9A)]

## ✨ Features

-   🌈 There are 6 colors for the components (black, red, orange, purple, green, blue)
-   ⚓️ We have integrated 5 useful hooks in the library
-   ⚙️ And some commonly used function that you might like

## 📦 Install

```bash
npm i queen-night
```

```bash
yarn add queen-night
```

## 🔨 Usage

```jsx
import { QInput } from "queen-night";

const App = () => (
    <>
        <QInput
            value={_value}
            onChange={(e) => _setValue(e.target.value)}
            color="purple"
            placeholder="Search...."
            icon={<RiUserHeartLine />}
            bordercolor={"2"}
        />

        <QButton>
            <RiUserHeartLine />
            Nghĩa
        </QButton>
        <QButton mode="2" color="orange">
            <RiUserHeartLine />
            Nghĩa
        </QButton>

        <QLoading width="80" height="80" color="green" length="4" />
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

        <QSelect
            data={optionQSelect(dataCityVN, "code", "name")}
            placeholder="Chọn bộ lọc đã lưu ..."
            value={placeCity}
            onChange={setPlaceCity}
            // bordercolor={"1"}
            color="orange"
            mode={"multiple"}
        />
    </>
);
```

## 🤝 Contributing

Thanks for this wonderful person

<td align="center"><a href="https://github.com/nghialthanh"><img src="https://scontent.fdad1-2.fna.fbcdn.net/v/t39.30808-6/292805521_1647623298953668_8699587294246231317_n.jpg?stp=cp6_dst-jpg_p180x540&_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=TRhlOZDuaSwAX8nagIs&tn=seQJrLb9GaHpob-S&_nc_ht=scontent.fdad1-2.fna&oh=00_AfDVxAVXzbqcg5fq9bTxYL0zErG6yEfsqHBcG8Km2ECovQ&oe=63717569" width="100px;" alt=""/><br /><sub><b>Nghĩa Đinh</btd>

[![Let's fund issues in this repository](https://issuehunt.io/static/embed/issuehunt-button-v1.svg)](https://www.linkedin.com/in/nghiadinhthanh/)
