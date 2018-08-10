release: cd server && python manage.py makemigrations && python manage.py migrate
web: cd server && gunicorn back_end.wsgi