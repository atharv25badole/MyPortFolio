# Use official OpenJDK 17 base image
FROM openjdk:17-jdk-slim

# Set the JAR file name (change to match your actual .jar name)
ARG JAR_FILE=target/myportfolio-0.0.1-SNAPSHOT.jar

# Copy the jar file to the container
COPY ${JAR_FILE} app.jar

# Expose the port to match Render’s dynamic PORT env
EXPOSE 8080

# Run the application
ENTRYPOINT ["java", "-jar", "app.jar"]
