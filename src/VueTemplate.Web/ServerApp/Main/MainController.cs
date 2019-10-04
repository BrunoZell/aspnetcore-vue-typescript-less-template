using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace VueTemplate.Web.ServerApp.Main
{
    public class MainController : Controller
    {
        [HttpGet("{*url}", Name = Routes.Index)]
        public IActionResult Index()
            => View();

        [HttpPost("api/version", Name = Routes.Version)]
        public IActionResult Version() =>
            Json(new {
                Version = $"v{GetType().Assembly.GetName().Version?.ToString(3) ?? "0.0.0"}"
            });

        [HttpGet("error", Name = Routes.Error)]
        public IActionResult Error()
        {
            ViewData["RequestId"] = Activity.Current?.Id ?? HttpContext.TraceIdentifier;
            return View();
        }
    }
}
