namespace backend_api.Handlers;

public static class TestApiHandler
{
    /// Builds the response for the /testapi endpoint.
    public static IResult GetMessage()
    {
        string message = "This message is handled by backend handler! 200 OK";
        return Results.Ok(new { message });
    }
}