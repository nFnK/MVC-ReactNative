# Applying MVC model in React Native

Link youtube video:
- Part 1: Creating model https://www.youtube.com/watch?v=SJGSncl2cQY
- Part 2: Creating controller https://www.youtube.com/watch?v=Alel1SG72pY
- Part 3: Creating view https://www.youtube.com/watch?v=8ailcT_ISrQ

********STEPS********

----------------ENGLISH VERSION----------------
* Database: json or sqlite
* MVC Design pattern: 
+ Model (M): class with attributes and one constructor
+ View (V)
+ Controller (C): we use mobx to perform some actions from user (like getObject, login, logout,...)

- STEP 1: Create model classes
- STEP 2: Install mobx, create controller classes and save data in controller:
+ STEP 2.1: Install mobx
+ STEP 2.2: Create controller classes
+ STEP 2.3: Read data from json or sqlite and save data in controller

import { observable, action } from 'mobx';

- STEP 3: Create views, show result to screen

import { observer } from 'mobx-react/native';

----------------PHIÊN BẢN TIẾNG VIỆT----------------
* Cơ sở dữ liệu: json hoặc sqlite
* Mô hình MVC: 
+ Model (M): class với các thuộc tính và 1 hàm khởi tạo
+ View (V)
+ Controller (C): chúng ta sử dụng mobx để thực hiện 1 số hành động của người dùng (như lấy đối tượng, đăng nhập, đăng xuất,...)

- BƯỚC 1: Tạo các class model
- BƯỚC 2: Cài đặt mobx, tạo class controller và lưu dữ liệu vào controller

import { observable, action } from 'mobx';

- BƯỚC 3: Tạo các view, hiển thị kết quả ra màn hình

import { observer } from 'mobx-react/native';
