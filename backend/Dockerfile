# Use the official .NET SDK image to build the application
FROM mcr.microsoft.com/dotnet/sdk:9.0 AS build
WORKDIR /source

# Copy csproj and restore as distinct layers to leverage Docker cache
COPY *.csproj .
RUN dotnet restore

# Copy everything else and build
COPY . .
RUN dotnet publish -c Release -o /app/publish

# Build runtime image
FROM mcr.microsoft.com/dotnet/aspnet:9.0
WORKDIR /app
COPY --from=build /app/publish .
# Copy base and environment-specific settings. The --if-exists flag makes this more robust.
COPY appsettings.json .
COPY appsettings.Development.json . 

# Expose the port the app runs on
EXPOSE 8080

# Set environment. This defaults to "Production" if not set.
# ASP.NET Core will use appsettings.json and appsettings.Production.json
ENV ASPNETCORE_ENVIRONMENT=Development

# Set the entrypoint
ENTRYPOINT ["dotnet", "KanbanApi.dll"]