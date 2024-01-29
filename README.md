# Full Stack Apps on AWS Project

You have been hired as a software engineer to develop an application that will help the FBI find missing people.
The application will upload images to the cloud database hosted in AWS.
This will allow the FBI to run facial recognition software on the images to detect a match.

- developing a NodeJS server and deploying it on AWS Elastic Beanstalk. 
- build upon the application we've developed during the lessons in this course.
- complete a REST API endpoint in a backend service that processes incoming image URLs.

## Project Instructions

Node 16

### Deploying your system

- `eb init` a new application
- `eb create` a new environment to deploy image-filter service
- `eb deploy` to push changes.

## project submission

- [x] a Git repository
- [-] a screenshot of the `elastic beanstalk` application dashboard after deployment
- [-] a link to the endpoint URL for a running elastic beanstalk deployment either in the Project README or in the project submission notes.

## Testing

- Successful URL responses should have a 200 code.
- Ensure that you include error codes for the scenario that someone uploads something other than an image and for other common errors.

## License

[License](LICENSE.txt)
