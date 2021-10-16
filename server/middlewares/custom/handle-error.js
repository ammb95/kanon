export default function handleError(error, req, res, next) {
  if (error) {
    res.status(error.status || 400).send(error);
  }
}
