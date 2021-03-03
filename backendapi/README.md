## Backend API


# MYSQL setup
*MYSQL is used as Database so make sure you have MYSQL installed and running on port 3306 or you can change the port in DATABASE in '/backendapi/backendapi/settings.py* 


*Make sure you know your username and password of MYSQL to fill in DATABASE section*
<img width="412" alt="Screenshot 2021-03-03 213342" src="https://user-images.githubusercontent.com/54539712/109834444-30acb500-7c68-11eb-9607-8ccd877a6256.png">




## you have to run the following commands to run Django server


**pip install django djangorestframework django-cors-headers**

**python manage.py makemigrations**

**python manage.py migrate**

**python manage.py runserver**
