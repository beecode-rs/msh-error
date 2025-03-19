export const expressMiddleware = (err, _req, res, _next) => {
    const code = err.httpCode ?? 500;
    return res.status(code).json({
        code,
        message: err.message,
        status: 'error',
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWlkZGxld2FyZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leHByZXNzL21pZGRsZXdhcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUEsTUFBTSxDQUFDLE1BQU0saUJBQWlCLEdBQUcsQ0FBQyxHQUEyQixFQUFFLElBQWEsRUFBRSxHQUFhLEVBQUUsS0FBbUIsRUFBVyxFQUFFO0lBQzVILE1BQU0sSUFBSSxHQUFJLEdBQXNCLENBQUMsUUFBUSxJQUFJLEdBQUcsQ0FBQTtJQUVwRCxPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQzVCLElBQUk7UUFDSixPQUFPLEVBQUUsR0FBRyxDQUFDLE9BQU87UUFDcEIsTUFBTSxFQUFFLE9BQU87S0FDZixDQUFDLENBQUE7QUFDSCxDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB0eXBlIE5leHRGdW5jdGlvbiwgdHlwZSBSZXF1ZXN0LCB0eXBlIFJlc3BvbnNlIH0gZnJvbSAnZXhwcmVzcydcblxuaW1wb3J0IHsgdHlwZSBFcnJvckJhc2VNb2RlbCB9IGZyb20gJyNzcmMvZXJyb3IvYmFzZS1tb2RlbCdcblxuZXhwb3J0IGNvbnN0IGV4cHJlc3NNaWRkbGV3YXJlID0gKGVycjogRXJyb3IgfCBFcnJvckJhc2VNb2RlbCwgX3JlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSwgX25leHQ6IE5leHRGdW5jdGlvbik6IHVua25vd24gPT4ge1xuXHRjb25zdCBjb2RlID0gKGVyciBhcyBFcnJvckJhc2VNb2RlbCkuaHR0cENvZGUgPz8gNTAwXG5cblx0cmV0dXJuIHJlcy5zdGF0dXMoY29kZSkuanNvbih7XG5cdFx0Y29kZSxcblx0XHRtZXNzYWdlOiBlcnIubWVzc2FnZSxcblx0XHRzdGF0dXM6ICdlcnJvcicsXG5cdH0pXG59XG4iXX0=