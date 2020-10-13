# JNV Kheda Alumni Details Collection and Maintenance
This project is about collecting and maintaining details of alumni of JNV Kheda. Currently working on a mini portal hosted as google web app and github pages. Google form has been taken down. Proof of concept is done as mentioned in [issue 5](https://github.com/dharmeshrchauhan/jnv-kheda-alumni/issues/5).

Note: As google form implementation is DEPRECATED, so following description is deprecated as well.
-

The collection form is implemented as google form. Edit link goes in email immediately after new entry or any changes as part of google form itself. 

This repository contains following:

- Google script, that can be used to retrieve edit link for the form. It can be used to send to alumni to update the details.
- Python script to convert data collected in google form to the format required by the school.
- Python script to create csv compatible with csv2vcard

## User Workflow
![Workflow](/user-workflow.png)

## Backend Workflow
![Workflow](/workflow.png)
