# CS8-hairschool

## API URL `https://john-cs8-hairschool.herokuapp.com`

## API Endpoints

### POST -- `/hairschool/registration`

Registers a new client.

| Property |     Type      | Required |
| -------- | ------------- | -------- |
| username | alphanumeric, *unique* | Yes      |
| password1 | String at least 8 alpha-numeric characters | Yes      |
| password2 | String at least 8 alpha-numeric characters, should equal 'password1' | Yes      |
| email | requires an `@` and a `.` as in a typical email address, *unique* | no      |


**Success**

```js
{
  key: 'a123123b321321c123123',
};
```

**Fail**

```js
{
  username: 'Reason for failure',
  email: 'Reason for failure',
  password1: 'Reason for failure',
  password2: 'Reason for failure'
}
```
### GET -- `/hairschool`

Gets all users in database.

Token must be set in Authorization headers as `'token a123123b321321c123123'`

**Success**

```js
{
  [
    {
      username: 'username',
      email: 'email'
    },
    {
      username: 'username',
      email: 'email'
    },    
    {
      username: 'username',
      email: 'email'
    },
    // ... continues to lists all users
  ]
};
```

**Fail**

```js
{
  detail: 'Failure info'
}
```

## django-rest-auth API endpoints

### Basic

- /rest-auth/login/ (POST)

    - username
    - email
    - password

    Returns Token key

- /rest-auth/logout/ (POST)

    .. note:: ``ACCOUNT_LOGOUT_ON_GET = True`` to allow logout using GET - this is the exact same configuration from allauth. NOT recommended, see: http://django-allauth.readthedocs.io/en/latest/views.html#logout

- /rest-auth/password/reset/ (POST)

    - email

- /rest-auth/password/reset/confirm/ (POST)

    - uid
    - token
    - new_password1
    - new_password2

    .. note:: uid and token are sent in email after calling /rest-auth/password/reset/

- /rest-auth/password/change/ (POST)

    - new_password1
    - new_password2
    - old_password

    .. note:: ``OLD_PASSWORD_FIELD_ENABLED = True`` to use old_password.
    .. note:: ``LOGOUT_ON_PASSWORD_CHANGE = False`` to keep the user logged in after password change

- /rest-auth/user/ (GET, PUT, PATCH)

    - username
    - first_name
    - last_name

    Returns pk, username, email, first_name, last_name


Registration
------------

- /rest-auth/registration/ (POST)

    - username
    - password1
    - password2
    - email

- /rest-auth/registration/verify-email/ (POST)

    - key


Social Media Authentication
---------------------------

Basing on example from installation section :doc:`Installation </installation>`

- /rest-auth/facebook/ (POST)

    - access_token
    - code

    .. note:: ``access_token`` OR ``code`` can be used as standalone arguments, see https://github.com/Tivix/django-rest-auth/blob/master/rest_auth/registration/views.py

- /rest-auth/twitter/ (POST)

    - access_token
    - token_secret
