# Project documentation

## Introduction

The following images shows how to the planification was done to structure the website. Only are include the index.html and the contact.html, as the prices.html will have the same structure as the contact.html.
![img_1.png](documentation/img_1.png)
![img_2.png](documentation/img_2.png)


## Justification

### HTML


### CSS

Multiple CSS files have been declared, in order to just import the scoped styles for each page of the website. In addition, some generic styles have been place in common files to avoid repeating code (See: styles.css and contactAndPrices.css).
The convention use in the files are camelCase, while the convention for naming classes is kebab-case.

To enforce reusability, on top of each file is defined a :root pseudo class where colors and sizes are set. 
Font face is used to load each of the fonts applied in the site.

All 

The body default styles are reset, so it is easier to lay out our website and other generic properties, like font-size are applied.
All the headers are composed by a navbar and an image with a header.

## Deploy
Besides the FTP provided by UOC, the project is deployed in [rail way](https://railway.app/) and hosted in [GitHub](https://github.com/MarcServat/web-standard-pac1).

URL: https://nginx-production-efec.up.railway.app/
repo: https://github.com/MarcServat/web-standard-pac1