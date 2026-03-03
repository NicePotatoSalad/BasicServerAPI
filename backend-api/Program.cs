using System.Numerics;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll", policy => policy.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader());
});

var app = builder.Build();

app.UseCors("AllowAll");

app.MapGet("/testapi", () => Results.Ok(new {message = "Backend received your click! 200 OK"}));

app.Run();