# Create an base image with node installed
# node is required for the Webpack target in the .csproj
FROM microsoft/dotnet:sdk AS dotnet-node-env
RUN apt-get update \
    && curl -sL https://deb.nodesource.com/setup_8.x | bash \
    && apt-get -y install nodejs

FROM dotnet-node-env AS build-env
WORKDIR /app

# Copy csproj and restore as distinct layers
COPY *.csproj ./
RUN dotnet restore

# Copy everything else and build
# This build includes an npm install and Webpack production build
# (Specified in .csproj)
COPY . ./
RUN dotnet publish -c Release -o out

# Build runtime image
FROM microsoft/dotnet:aspnetcore-runtime
WORKDIR /app
COPY --from=build-env /app/out .
ENTRYPOINT ["dotnet", "Template.Web.dll"]
