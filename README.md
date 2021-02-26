# employee-list

![License](https://img.shields.io/badge/license-MIT-181717?style=for-the-badge) 

## Table of Contents
* [Title](#title)
* [Deployed Link](#deployed-link)
* [Site Picture](#site-gif)
* [Technologies Used](#technologies-used)
* [Description](#description)
* [Work Involved](#work-involved)
* [Code Snippet](#code-snippet)
* [License](#license)
* [Authors](#authors)
* [Questions](#questions)
* [Acknowledgments](#acknowledgments)

## Deployed Link
* Click this link to view the site.
[Deployed Link]()

## Site Gif
![Site](./public/images/employee-list.gif)

## Technologies Used
* HTML
* javascript
* CSS
* Reactjs
* Express
* Random user api
* Fontawesome
* Github
* Github pages
* Bootstrap

## Description
This application allows a user to view their entire employee directory, filter their employees by ascending and descending order, and allows them to search for a user by name.

## Work Involved
For this application, I created the front end aspects with Bootstrap. For the overall functionality of the site, I utilized React, and added the randomUser API for the employee profiles.

## Code Snippet
* This code snippet demonstrates the search form functionality.
```
  const searchForUser = (currentSearch) => {
    const searchedUsers = users.filter(
      user => {
        if (user.name.includes(currentSearch)) {
          return user;
        }
      }
    )
    setUserSearch(searchedUsers);
  };

  const handleInputChange = event => {
    setSearch(event.target.value);
    searchForUser(event.target.value);
  };
```

## License
This project is covered under MIT.

## Authors
**UC Berkeley Coding Bootcamp**

**Jessny Joseph** 

## Questions 
* [Github](https://github.com/jessnyj)
* [LinkedIn](https://www.linkedin.com/in/jessny-joseph-361515201)

## Acknowledgments
Trilogy Education Services
