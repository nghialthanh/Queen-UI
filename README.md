<p align="center">
  <a href="https://github.com/nghialthanh/Queen-UI">
    <img width="200" src="https://github.com/nghialthanh/Queen-UI/blob/main/logo/t3.png?raw=true"
  </a>
</p>

<h1 align="center">🌼QUEEN UI🌼</h1>
<div align="center">
A simple React UI library designed by an amateur developer, so there are still many shortcomings. And i hope everyone will support and contribute to my first product

</div>

![](https://github.com/nghialthanh/Queen-UI/blob/main/logo/Capture.PNG?raw=true)

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

##QInput
QInput contains all the basic props of an input element

```jsx
        <QInput
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Search...."
        />
);
```

####Props

| Name            | Type    | Description                                                                                                                                                                                                        |
| --------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **color**       | string  | Set themes for element. Default value is **"black"** and in addition 5 other colors: **"red", "orange", "purple", "green", "blue"**                                                                                |
| **icon**        | node    | Add icon in front of input element                                                                                                                                                                                 |
| **className**   | string  | Add class name for element                                                                                                                                                                                         |
| **style**       | object  | Add inline style for element                                                                                                                                                                                       |
| **boxShadow**   | boolean | Default value is true, when focus event is fired the input will have an additional box-shadow property according to themes                                                                                         |
| **bordercolor** | string  | There are 3 types of modes: **"0"**: color and border color is gray when not focused,**"1"**: color and border color is primary color when not focused, **"2"**: Only borderbottom has color. Default value is "0" |
| **ref**         | ref     | Add ref attached to React elements via the ref attribute.                                                                                                                                                          |

##QButton
QButton contains all the basic props of an button element

```jsx
<QButton mode="2" color="orange">
    Submit
</QButton>
```

####Props

| Name          | Type           | Description                                                                                                                         |
| ------------- | -------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| **color**     | string         | Set themes for element. Default value is **"black"** and in addition 5 other colors: **"red", "orange", "purple", "green", "blue"** |
| **className** | string         | Add class name for element                                                                                                          |
| **children**  | string or node | Add content for button element                                                                                                      |
| **style**     | object         | Add inline style for element                                                                                                        |
| **mode**      | string         | There are 3 types of modes: **"1"**: background-color is primary color, **"2"**: background-color is white. Default value is "1"    |
| **ref**       | ref            | Add ref attached to React elements via the ref attribute.                                                                           |

##QRadio

```jsx
<QRadio
    value={value}
    checked={value}
    name={"radio"}
    color="purple"
    onChange={setValue((old) => !old)}
>
    Male
</QRadio>
```

####Props

| Name          | Type           | Description                                                                                                                         |
| ------------- | -------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| **color**     | string         | Set themes for element. Default value is **"black"** and in addition 5 other colors: **"red", "orange", "purple", "green", "blue"** |
| **className** | string         | Add class name for element                                                                                                          |
| **children**  | string or node | Add content for button element                                                                                                      |
| **style**     | object         | Add inline style for element                                                                                                        |
| **mode**      | string         | There are 3 types of modes: **"1"**: background-color is primary color, **"2"**: background-color is white. Default value is "1"    |
| **ref**       | ref            | Add ref attached to React elements via the ref attribute.                                                                           |

## 🤝 Contributing

Thanks for this wonderful person

<td align="center"><a href="https://github.com/nghialthanh"><img src="https://scontent.fdad1-2.fna.fbcdn.net/v/t39.30808-6/292805521_1647623298953668_8699587294246231317_n.jpg?stp=cp6_dst-jpg_p180x540&_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=TRhlOZDuaSwAX8nagIs&tn=seQJrLb9GaHpob-S&_nc_ht=scontent.fdad1-2.fna&oh=00_AfDVxAVXzbqcg5fq9bTxYL0zErG6yEfsqHBcG8Km2ECovQ&oe=63717569" width="100px;" alt=""/><br /><sub><b>Nghĩa Đinh</btd>

[![Let's fund issues in this repository](https://issuehunt.io/static/embed/issuehunt-button-v1.svg)](https://www.linkedin.com/in/nghiadinhthanh/)
