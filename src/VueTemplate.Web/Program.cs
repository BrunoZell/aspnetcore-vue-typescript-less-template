using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;

namespace VueTemplate.Web
{
    public sealed class Program
    {
        public static void Main(string[] args) =>
            CreateHostBuilder(args)
                .Build()
                .Run();

        public static IHostBuilder CreateHostBuilder(string[] args) =>
            new HostBuilder()
                .ConfigureWebHost(web => {
                    web.UseKestrel();
                    web.UseStartup<Startup>();
                })
                .ConfigureHostConfiguration(config => {
                    config.AddEnvironmentVariables("DOTNET_");
                    config.AddCommandLine(args);
                })
                .ConfigureAppConfiguration((context, config) => {
                    config.AddJsonFile("appsettings.json", optional: true, reloadOnChange: true);
                    config.AddJsonFile($"appsettings.{context.HostingEnvironment.EnvironmentName.ToLowerInvariant()}.json", true, true);
                    config.AddEnvironmentVariables("DOTNET_");
                    config.AddUserSecrets<Program>(true);
                    config.AddCommandLine(args);
                })
                .ConfigureLogging((context, logging) => {
                    logging.AddDebug();
                    logging.AddConsole();
                })
                .UseConsoleLifetime();
    }
}
