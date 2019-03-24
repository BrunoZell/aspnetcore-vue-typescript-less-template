# Create an base image with node installed.
# Node is required for the Webpack target in the .csproj
FROM microsoft/dotnet:sdk AS dotnet-node-env
RUN apt-get update \
    && curl -sL https://deb.nodesource.com/setup_8.x | bash \
    && apt-get -y install nodejs

FROM dotnet-node-env AS build-env

# Copy everything and build (we assume the build context is the /src folder here).
# This build includes an npm install and Webpack production build (Specified in .csproj).
COPY . /app
RUN dotnet publish /app/{{ name }}.Web/{{ name }}.Web.csproj -c Release -o /out

# Todo: Do restore and publish in distinct layers

# Build runtime image
FROM microsoft/dotnet:aspnetcore-runtime
WORKDIR /app
COPY --from=build-env /out .
ENTRYPOINT ["dotnet", "{{ name }}.Web.dll"]
