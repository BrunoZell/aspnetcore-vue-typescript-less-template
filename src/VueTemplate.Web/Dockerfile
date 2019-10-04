# Create an base image with node installed.
# node is required for the Webpack target in the .csproj
FROM mcr.microsoft.com/dotnet/core/sdk:3.0.100-buster AS dotnet-node
RUN apt-get update \
    && curl -sL https://deb.nodesource.com/setup_10.x | bash \
    && apt-get -y install nodejs

# We assume the build context is the solution root folder.
# This build includes an npm install and Webpack production build (Specified in .csproj).
FROM dotnet-node AS build
WORKDIR /solution

# Copy global solution files first
COPY *.props *.ruleset global.json .editorconfig ./
COPY src/*.props ./src/

# Do a restore in a separate layer for better caching.
# Copy all project files first flat into the current directory.
# Then we move each .csproj in a new sub folder with the same name of the project.
# Note that this makes an assumption on the project structure (Project live in folders with the same name).
# https://andrewlock.net/optimising-asp-net-core-apps-in-docker-avoiding-manually-copying-csproj-files-part-2/
COPY src/*/*.csproj ./
RUN for file in $(ls *.csproj); do mkdir -p src/${file%.*}/ && mv $file src/${file%.*}/; done
RUN dotnet restore "src/VueTemplate.Web/VueTemplate.Web.csproj"

# Copy all source code and publish
COPY ./src ./src
RUN dotnet publish "src/VueTemplate.Web/VueTemplate.Web.csproj" --no-restore -c Release -o /app/publish

# Create a final image with the runtime only
FROM mcr.microsoft.com/dotnet/core/aspnet:3.0.0-buster-slim AS final
WORKDIR /app
COPY --from=build /app/publish .
ENTRYPOINT ["dotnet", "VueTemplate.Web.dll"]
