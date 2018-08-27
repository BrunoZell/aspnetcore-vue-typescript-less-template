using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;

namespace Template.Web.ServerApp.Main {
    public class MainController : Controller {
        [HttpGet("/", Name = Routes.Index)]
        public IActionResult Index()
            => View();

        [HttpGet("error", Name = Routes.Error)]
        public IActionResult Error() {
            ViewData["RequestId"] = Activity.Current?.Id ?? HttpContext.TraceIdentifier;
            return View();
        }
    }
}
