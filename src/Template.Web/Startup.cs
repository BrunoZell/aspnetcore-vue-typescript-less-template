using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using OdeToCode.AddFeatureFolders;
using System;

namespace Template.Web {
    public class Startup {
        public IConfiguration Configuration { get; }
        public IHostingEnvironment Environment { get; }

        public Startup(IConfiguration configuration, IHostingEnvironment environment) {
            Configuration = configuration ?? throw new ArgumentNullException(nameof(configuration));
            Environment = environment ?? throw new ArgumentNullException(nameof(environment));
        }

        public void ConfigureServices(IServiceCollection services) {
            services.AddMvc()
                .AddFeatureFolders(new FeatureFolderOptions { FeatureFolderName = "ServerApp" });
        }

        public void Configure(IApplicationBuilder app, IHostingEnvironment env) {
            if (env.IsDevelopment()) {
                app.UseDeveloperExceptionPage();
            }
            else {
                app.UseExceptionHandler("/Main/Error");
            }

            app.UseStaticFiles();
            app.UseMvc(routes => {
                routes.MapSpaFallbackRoute("spa-fallback", new { controller = "Main", action = "Index" });
            });
        }
    }
}
