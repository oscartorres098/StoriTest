# StoriTest-service
This repo contains the Api for the newsletter Stori Test.

License

# Sumary
This NestJS application provides the backend functionality for a newsletter application. It manages four core entities: Users, Presets, Schedules and Attachment. Additionally, it integrates with SendGrid, an email delivery service, to handle email sending. The application also has a dedicated domain containing all entities and DTOs (Data Transfer Objects), promoting scalability, such as a potential conversion to a microservice architecture.

# Model
The application manages four core entities: Users, Presets, Schedules, and Attachments. These entities are illustrated in the following diagram.
![Diagrama sin título drawio (2)](https://github.com/oscartorres098/StoriTest/assets/36300388/ff4ef692-1a40-45d0-9d70-79be6b48879f)

  • Users: Represents the people that register in the application, and that will receive emails.
  • Presets: Represents the content of the mail ths will be send to the user.
  • Attachment: Represents the attatched files tha will be send in a mail.
  • schedule: Represents the date and the hour tha a mail will be send.

# Domain
The dedicated domain containing all entities and DTOs (Data Transfer Objects), promoting scalability, such as a potential conversion to a microservice architecture. 

# Sendgrid
Sendgrid is a tool integrated in the aplications that helps managing emails and provides statics.

# Api 
In the repository the file StoriTest.postman_collection.json contains the postman collection to taste the api.

# Deployment
To run the app in a local enviroment just install packages and run the comand npm run start:dev.
