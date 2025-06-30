# Build stage
FROM maven:3.9.6-eclipse-temurin-17 AS build
WORKDIR /app

# Copy source code
COPY . .

# Build the project and skip tests
RUN mvn clean package -DskipTests

# Run stage
FROM openjdk:17-jdk-slim
WORKDIR /app

# Copy built jar from the previous stage
COPY --from=build /app/target/myportfolio-0.0.1-SNAPSHOT.jar app.jar

# Expose dynamic port for Render
EXPOSE 8080

# Run the application
ENTRYPOINT ["java", "-jar", "app.jar"]