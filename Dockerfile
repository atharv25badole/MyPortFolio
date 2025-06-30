# Build stage: Maven with Java 21
FROM maven:3.9.6-eclipse-temurin-21 AS build
WORKDIR /app

# Copy source code
COPY . .

# Build the project
RUN mvn clean package -DskipTests

# Run stage: Java 21 runtime
FROM eclipse-temurin:21-jdk
WORKDIR /app

# Copy the jar from build stage
COPY --from=build /app/target/myportfolio-0.0.1-SNAPSHOT.jar app.jar

# Expose Render's dynamic port
EXPOSE 8080

# Run the app
ENTRYPOINT ["java", "-jar", "app.jar"]