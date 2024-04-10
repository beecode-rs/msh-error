export const expressMiddleware = (err, _req, res, _next) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const code = err.httpCode ?? 500;
    return res.status(code).json({
        code,
        message: err.message,
        status: 'error',
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWlkZGxld2FyZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leHByZXNzL21pZGRsZXdhcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUEsTUFBTSxDQUFDLE1BQU0saUJBQWlCLEdBQUcsQ0FBQyxHQUEyQixFQUFFLElBQWEsRUFBRSxHQUFhLEVBQUUsS0FBbUIsRUFBVyxFQUFFO0lBQzVILDhEQUE4RDtJQUM5RCxNQUFNLElBQUksR0FBSSxHQUFXLENBQUMsUUFBUSxJQUFJLEdBQUcsQ0FBQTtJQUV6QyxPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQzVCLElBQUk7UUFDSixPQUFPLEVBQUUsR0FBRyxDQUFDLE9BQU87UUFDcEIsTUFBTSxFQUFFLE9BQU87S0FDZixDQUFDLENBQUE7QUFDSCxDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0RnVuY3Rpb24sIFJlcXVlc3QsIFJlc3BvbnNlIH0gZnJvbSAnZXhwcmVzcydcblxuaW1wb3J0IHsgRXJyb3JCYXNlTW9kZWwgfSBmcm9tICcjc3JjL2Vycm9yL2Jhc2UtbW9kZWwnXG5cbmV4cG9ydCBjb25zdCBleHByZXNzTWlkZGxld2FyZSA9IChlcnI6IEVycm9yIHwgRXJyb3JCYXNlTW9kZWwsIF9yZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UsIF9uZXh0OiBOZXh0RnVuY3Rpb24pOiB1bmtub3duID0+IHtcblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcblx0Y29uc3QgY29kZSA9IChlcnIgYXMgYW55KS5odHRwQ29kZSA/PyA1MDBcblxuXHRyZXR1cm4gcmVzLnN0YXR1cyhjb2RlKS5qc29uKHtcblx0XHRjb2RlLFxuXHRcdG1lc3NhZ2U6IGVyci5tZXNzYWdlLFxuXHRcdHN0YXR1czogJ2Vycm9yJyxcblx0fSlcbn1cbiJdfQ==