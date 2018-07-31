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
