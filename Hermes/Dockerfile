FROM mcr.microsoft.com/dotnet/aspnet:3.1 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443
RUN apt-get update && apt-get install -y texlive-full

FROM mcr.microsoft.com/dotnet/sdk:3.1 AS build
WORKDIR /src
COPY ["Hermes.Website/Hermes.Website.csproj", "Hermes.Website/"]
RUN dotnet restore "Hermes.Website/Hermes.Website.csproj"
COPY . .
WORKDIR "/src/Hermes.Website"
RUN dotnet build "Hermes.Website.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "Hermes.Website.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "Hermes.Website.dll"]