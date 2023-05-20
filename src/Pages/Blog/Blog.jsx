import useTitle from "../../Shared/UseTitle/UseTitle";

const Blog = () => {
  useTitle('Blog')
  return (
    <div className="border-2 m-3 p-6 md:p-12 " id="blog-page-content">
      <div className="border-2 border-indigo-300 rounded p-3">
        <h1 className="text-2xl font-bold">
          What is an access token and refresh token? How do they work and where
          should we store them on the client-side?
        </h1>
        <p>
          1. Access Token: <br />
          An access token is a credential used by a client to access protected
          resources on a server. It is a string generated upon successful
          authentication. The client includes the access token in requests to
          authenticate and gain access to resources. Access tokens have a
          limited lifespan and expire after a certain period. <br /> <br /> 2.
          Refresh Token: <br /> A refresh token is used to obtain a new access
          token without re-authentication. It is issued alongside the access
          token during authentication. Refresh tokens have a longer lifespan and
          are used to request new access tokens when the current one expires.
          The server verifies the refresh token and issues a new access token.{" "}
          <br /> <br /> 3. Storage on Client-side: <br /> Tokens should be
          securely stored on the client-side. It is recommended to use HTTP-only
          secure cookies or secure token storage mechanisms provided by the
          operating system or framework. Avoid storing tokens in vulnerable
          client-side storage mechanisms like cookies, local storage, or session
          storage.
        </p>
      </div>

      <div className="border-2 border-indigo-300 rounded p-3 my-4">
        <h1 className="text-2xl font-bold">Compare SQL and NoSQL databases?</h1>

        <p>
          {" "}
          NoSQL databases: <br /> SQL Databases: 1 Structured data with fixed
          schemas. <br /> 2 Use SQL language for querying and manipulating data.{" "}
          <br />
          3 Vertical scalability, scaling up hardware resources. <br /> 4
          Support transactions and ACID compliance. 1.5 Enforce data integrity
          through constraints and referential integrity. <br /> <br /> NoSQL
          Databases: <br /> 1 Flexible, schema-less data structures. <br /> 2
          Use various query languages or APIs. <br /> 3 Horizontal scalability,
          scaling out across multiple servers. <br /> 4 Eventual consistency,
          sacrificing ACID properties for scalability and performance. <br /> 5
          Allow for more flexible data modeling and handling unstructured data.
        </p>
      </div>
      <div className="border-2 border-indigo-300 rounded p-3">
        <h1 className="text-2xl font-bold">
          What is express js? What is Nest JS
        </h1>
        <p>
          Express is a minimalist and flexible framework that is easy to use and
          has a large community of developers. NestJS, on the other hand, is a
          newer framework that provides additional features such as dependency
          injection, a modular architecture, and an intuitive CLI.
        </p>
      </div>
      <div className="border-2 border-indigo-300 rounded p-3 mt-4">
        <h1 className="text-2xl font-bold">
          What is MongoDB aggregate and how does it work
        </h1>
        <p>
          Aggregation is a way of processing a large number of documents in a
          collection by means of passing them through different stages. The
          stages make up what is known as a pipeline. The stages in a pipeline
          can filter, sort, group, reshape and modify documents that pass
          through the pipeline.
        </p>
      </div>
    </div>
  );
};

export default Blog;
