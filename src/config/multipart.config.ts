import { FastifyMultipartOptions } from '@fastify/multipart';

// Used to send users book images to aws s3
const multipartConfig: FastifyMultipartOptions = {
  limits: {
    fieldNameSize: 100, // Max field name size in bytes
    fieldSize: 100, // Max field value size in bytes
    fields: 10, // Max number of non-file fields
    fileSize: 2000000, // Max file size of 2mb
    files: 1, // Max number of file fields
    headerPairs: 2000, // Max number of header key=>value pairs
    parts: 1000, // Max number of parts (fields + files)
  },
};

export default multipartConfig;
