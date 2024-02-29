# Advanced To Do Web App Using React and Azure
Project Name: Advanced To Do Web App Using React and Azure

Created by: Deepak Vishwakarma, Janavi Bisht, Abhilasha Sutar

# Project Description:-
Our innovative To-Do list application sets out to redefine task organization and management by leveraging modern technologies and intuitive design principles. Built upon the versatile React framework, the application boasts a sleek and user-friendly interface that ensures a seamless user experience. One of the standout features of our application is the integration of a real-time clock, which provides users with accurate time information directly within the application interface. This real-time clock enhances the utility of the application, allowing users to stay informed about the current time while managing their tasks efficiently.

In addition to the real-time clock, our To-Do list application incorporates a range of intuitive controls to streamline task management. Users have access to a variety of buttons, including clear, complete, and search functionalities, which are seamlessly integrated into the application interface. The clear button enables users to remove all completed tasks or reset the task list, providing a convenient way to declutter and start afresh. The complete button allows users to mark tasks as completed with a single click, streamlining the process of tracking task progress. Meanwhile, the search button empowers users to quickly find specific tasks within their list, enhancing efficiency and productivity.

Furthermore, our application prioritizes user convenience and accessibility by ensuring that these buttons are easily accessible and prominently displayed within the application interface. Whether on desktop or mobile devices, users can effortlessly interact with these controls to manage their tasks effectively. By combining the functionality of a real-time clock with intuitive buttons for task management, our To-Do list application offers a comprehensive solution for users seeking to organize their tasks efficiently and stay productive in their daily lives.

# Prerequisites :
An Azure account with an active subscription. Create an account for free.
Or simply login to your Student Account 

# Working Links of Project :
Web Application hosted on Azure : https://red-sky-0ff674610.4.azurestaticapps.net

Github Repository : https://github.com/d9870/app

Code : https://github.com/d9870/app/tree/master

Documentation : https://drive.google.com/file/d/1pRDFjka3qBgAdK9d-e0GkASwEYM-nkky/view

Video: 

# Core Azure Servies:
Azure App Service (For hosting the website)

Monitoring Alert (Tracking of problems to report)

# Azure AI Servies:
Azure AI Translator

# Industry Type :-
Lifestyle

# Web Technologies Used :
HTML

CSS

JavaScript

React

# IDE Used :
Visual Studio Code

# Steps Followed While Deploying :
1. Open the azure portal.
![Pic1](https://github.com/d9870/app/assets/86678608/e496e90e-e36c-44b2-9fe3-d1f9db95e0ad)
2. Search Web App and select static web app.  Fill the details like subscription, Resource group, name of static web app, hosting plan, azure function and staging details, development details, deployment details.
![2](https://github.com/d9870/app/assets/86678608/790c8ff3-316a-4065-aa6b-505e410034a2)
3. After selection GitHub as Depolyment details fill the details like Organization, Repository, Build Presents, App location, output location. Then click on "Review + create".
![3](https://github.com/d9870/app/assets/86678608/8282aff4-fd8e-4519-83c4-4d2ac245e437)
4. Click on create.
![4](https://github.com/d9870/app/assets/86678608/51d1408a-669f-4efe-818f-03f005b4fc6b)
5. Click on "Go to resources".
![5](https://github.com/d9870/app/assets/86678608/03037abb-7e07-47b8-b8dc-0458e225c3e7)

6. Click on overview.
![6](https://github.com/d9870/app/assets/86678608/297ab937-6043-41c1-9410-4c91a8c47eed)

7. Copy the URL and paste on a new tab or browser.
![7](https://github.com/d9870/app/assets/86678608/5d646bbe-6135-49e0-8360-e5ab2a17f41d)

8. Search on azure portal "Monitor". Inside monitor click on Logs. Select scope and select the static web app developed. Click on Apply.
![8](https://github.com/d9870/app/assets/86678608/3866da47-5a0a-4a5d-9d0b-b55a29fb55f8)

9. In Monitors, click on Alerts. Create an alert rule. Select scope and select the resource group in which the web app is bulit. Click on Apply.
![9](https://github.com/d9870/app/assets/86678608/b7eceb59-0b8f-40e3-82b7-680aa0153b06)

10. Scope of Alert rule is created.
![10](https://github.com/d9870/app/assets/86678608/291ade62-0d0b-44b1-aada-35d0499ef52b)

11. In condition, select signal name, event level.
![11](https://github.com/d9870/app/assets/86678608/b992d28f-78e4-495f-b720-7ecfe6a5e821)

12. In details, Select the resource group and alert rule name. Click on "Review + create".
![12](https://github.com/d9870/app/assets/86678608/e0162184-e80a-43b6-be23-5c960437057c)

13. Click on "Create".
![13](https://github.com/d9870/app/assets/86678608/737ee611-0b5b-43c0-a496-aa01f296fef0)

14. Now are adding a Azure AI Translator. Search Azure AI Services and in it Translator.
![14](https://github.com/d9870/app/assets/86678608/660a1fca-22f0-4b03-9d40-7a7536ff2911)

15. Create Translator. Fill the details like Subscription, Resource group, Region, Name, Pricing tier. Click on "Review + create".
![15](https://github.com/d9870/app/assets/86678608/774736f8-4f31-4e86-9e4f-5ed34f462c08)

16. Click on "Create".
![16](https://github.com/d9870/app/assets/86678608/112ab8ff-6826-4e87-b8c0-b9610bfcb60d)

17. Translator is created and click on "Go to resource".
![17](https://github.com/d9870/app/assets/86678608/520b0787-d856-4bdb-b67b-ae66bfcc5246)

18. In Resource Management go to Keys and Endpoint. We get 2 keys generated.
![18](https://github.com/d9870/app/assets/86678608/cde7aafc-95ff-4823-985b-adbaa80e0a55)

19. In settings, go to Environment variables.
![19](https://github.com/d9870/app/assets/86678608/9652e6ca-ec80-4b39-951a-2c7071e79c37)

20. Now our full project is ready for use.
![20](https://github.com/d9870/app/assets/86678608/8546d85a-a26c-4a3d-970a-b54e40b114d7)


# ScreenShots of Some Azure Resources :
App Service :
![app service](https://github.com/d9870/app/assets/86678608/f993e131-09cd-4b91-9dfc-8e5f83ea4c65)

Monitoring :
![monitoring](https://github.com/d9870/app/assets/86678608/fdbcac95-895f-4671-acdc-7410270d4071)

Azure AI Translator :
![image](https://github.com/d9870/app/assets/86678608/075ff3de-5e9c-42c7-9f04-6097bc1d4c58)


ScreenShots of the website after deploying (Default Page) :
![default](https://github.com/d9870/app/assets/86678608/5fb4f740-feb7-4c37-a276-a38dd5fc4a76)

After Completelty:
![final](https://github.com/d9870/app/assets/86678608/8536c37e-9cfd-47f5-b5f1-399139379d7b)


