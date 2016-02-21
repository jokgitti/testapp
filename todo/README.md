# todo app
Simple to do app built with spring boot web services and angular js.

prerequisites:
- java sdk 1.8
- apache tomcat 8
- apache maven
- bower
- mysql

installation:
- navigate to ~/todo and build the application with `mvn clean package`
- navigate to ~/todo/src/main/webapp/ and run `bower install`
- run mysql and create a db called sampledb
- copy war archive created in ~/todo/target under tomcat webapp directory
