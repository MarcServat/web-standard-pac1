# Project documentation

## Introduction

The following images shows how to the planification was done to structure the website. Only are include the index.html and the contact.html, as the prices.html will have the same structure than the contact.html.
![img_1.png](img_1.png)
![img_2.png](img_2.png)


## Justification

### HTML
Multiple CSS files have been declared, in order to just import the scoped styles for each page of the website. In addition, some generic styles have been place in common files to avoid repeating code (See: styles.css and contactAndPrices.css).
The convention use in the files are camelCase, while the convention for naming classes is kebab-case.

To enforce reusability, on top of each file is defined a :root pseudo class where colors and sizes are set.
Font face is used to load each of the fonts applied in the site.

The body default styles are reset, so it is easier to lay out our website and other generic properties, like font-size are applied.
The headers are composed by a navbar, divided in two parts: a link with the logo and the company name and, the menu which is an unordered list of links.
For the images that covers the whole width and have text on them, an extra layer it has been added, so the text could be overlapped without the filters applied to the image.
The icons from font-awesome are loaded locally, to reduce the number of http request and increase performance.

### Index

For the "meet our staff" section, the layout has been styled with flex. In column direction for the overall section, all the staff members in a row and each of the  members in a column.
This way it is easier to add a new member into a row or more elements into each of the staff columns.
For the "our customer say" section occupies the whole width as the background is colored. Something to point out is the use of the ":before" and ":after" selectors to modify the default styles from the "q" tag

### Prices

The table is done with a html generator but styled by hand.


### Contact 

For the map, an integration with google developer has been done to increase the UX experience, although the alert cannot be removed until the billing is enabled.
For the form, ids and html tags are used to target elements and apply styles, as one form as much, per page is expected.


## Deploy
Besides, the FTP provided by the UOC, the project is deployed in [rail way](https://railway.app/) and hosted in [GitHub](https://github.com/MarcServat/web-standard-pac1).

URL: https://nginx-production-efec.up.railway.app/
repo: https://github.com/MarcServat/web-standard-pac1




