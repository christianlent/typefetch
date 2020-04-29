import { expect } from "chai";
import { createApi } from "../../src/typefetch";
import {
  TypescriptParser,
  InterfaceDeclaration,
  File,
} from "typescript-parser";

let parsed: File;

describe("Test declarations for samples/v2/api-with-examples.json", function () {
  this.beforeAll(async () => {
    const api = await createApi("samples/v2/api-with-examples.json");
    const parser = new TypescriptParser();
    parsed = await parser.parseSource(api);
  });

  it("Ensure ListVersionsv2Body is properly declared", async function () {
    const ListVersionsv2BodyDeclaration = parsed.declarations.find(
      (x) => x.name === "ListVersionsv2Body"
    ) as InterfaceDeclaration;
    const properties = ListVersionsv2BodyDeclaration.properties;
    expect(properties.length).to.equal(0);
  });

  it("Ensure ListVersionsv2Query is properly declared", async function () {
    const ListVersionsv2QueryDeclaration = parsed.declarations.find(
      (x) => x.name === "ListVersionsv2Query"
    ) as InterfaceDeclaration;
    const properties = ListVersionsv2QueryDeclaration.properties;
    expect(properties.length).to.equal(0);
  });

  it("Ensure ListVersionsv2Header is properly declared", async function () {
    const ListVersionsv2HeaderDeclaration = parsed.declarations.find(
      (x) => x.name === "ListVersionsv2Header"
    ) as InterfaceDeclaration;
    const properties = ListVersionsv2HeaderDeclaration.properties;
    expect(properties.length).to.equal(0);
  });

  it("Ensure ListVersionsv2Path is properly declared", async function () {
    const ListVersionsv2PathDeclaration = parsed.declarations.find(
      (x) => x.name === "ListVersionsv2Path"
    ) as InterfaceDeclaration;
    const properties = ListVersionsv2PathDeclaration.properties;
    expect(properties.length).to.equal(0);
  });

  it("Ensure ListVersionsv2200 is properly declared", async function () {
    const ListVersionsv2200Declaration = parsed.declarations.find(
      (x) => x.name === "ListVersionsv2200"
    ) as InterfaceDeclaration;
    const properties = ListVersionsv2200Declaration.properties;
    false;
    const CodeDeclaration = properties.find((x) => x.name === "code");
    expect(CodeDeclaration).be.an("object");
    expect(CodeDeclaration.type).be.equal('"200"');

    const ContentDeclaration = properties.find((x) => x.name === "content");
    expect(ContentDeclaration).be.an("object");
    expect(ContentDeclaration.type).be.equal("any");

    const HeadersDeclaration = properties.find((x) => x.name === "headers");
    expect(HeadersDeclaration).be.an("object");
    expect(HeadersDeclaration.type).be.equal("Headers");
  });

  it("Ensure ListVersionsv2300 is properly declared", async function () {
    const ListVersionsv2300Declaration = parsed.declarations.find(
      (x) => x.name === "ListVersionsv2300"
    ) as InterfaceDeclaration;
    const properties = ListVersionsv2300Declaration.properties;
    false;
    const CodeDeclaration = properties.find((x) => x.name === "code");
    expect(CodeDeclaration).be.an("object");
    expect(CodeDeclaration.type).be.equal('"300"');

    const ContentDeclaration = properties.find((x) => x.name === "content");
    expect(ContentDeclaration).be.an("object");
    expect(ContentDeclaration.type).be.equal("any");

    const HeadersDeclaration = properties.find((x) => x.name === "headers");
    expect(HeadersDeclaration).be.an("object");
    expect(HeadersDeclaration.type).be.equal("Headers");
  });

  it("Ensure GetVersionDetailsv2Body is properly declared", async function () {
    const GetVersionDetailsv2BodyDeclaration = parsed.declarations.find(
      (x) => x.name === "GetVersionDetailsv2Body"
    ) as InterfaceDeclaration;
    const properties = GetVersionDetailsv2BodyDeclaration.properties;
    expect(properties.length).to.equal(0);
  });

  it("Ensure GetVersionDetailsv2Query is properly declared", async function () {
    const GetVersionDetailsv2QueryDeclaration = parsed.declarations.find(
      (x) => x.name === "GetVersionDetailsv2Query"
    ) as InterfaceDeclaration;
    const properties = GetVersionDetailsv2QueryDeclaration.properties;
    expect(properties.length).to.equal(0);
  });

  it("Ensure GetVersionDetailsv2Header is properly declared", async function () {
    const GetVersionDetailsv2HeaderDeclaration = parsed.declarations.find(
      (x) => x.name === "GetVersionDetailsv2Header"
    ) as InterfaceDeclaration;
    const properties = GetVersionDetailsv2HeaderDeclaration.properties;
    expect(properties.length).to.equal(0);
  });

  it("Ensure GetVersionDetailsv2Path is properly declared", async function () {
    const GetVersionDetailsv2PathDeclaration = parsed.declarations.find(
      (x) => x.name === "GetVersionDetailsv2Path"
    ) as InterfaceDeclaration;
    const properties = GetVersionDetailsv2PathDeclaration.properties;
    expect(properties.length).to.equal(0);
  });

  it("Ensure GetVersionDetailsv2200 is properly declared", async function () {
    const GetVersionDetailsv2200Declaration = parsed.declarations.find(
      (x) => x.name === "GetVersionDetailsv2200"
    ) as InterfaceDeclaration;
    const properties = GetVersionDetailsv2200Declaration.properties;
    false;
    const CodeDeclaration = properties.find((x) => x.name === "code");
    expect(CodeDeclaration).be.an("object");
    expect(CodeDeclaration.type).be.equal('"200"');

    const ContentDeclaration = properties.find((x) => x.name === "content");
    expect(ContentDeclaration).be.an("object");
    expect(ContentDeclaration.type).be.equal("any");

    const HeadersDeclaration = properties.find((x) => x.name === "headers");
    expect(HeadersDeclaration).be.an("object");
    expect(HeadersDeclaration.type).be.equal("Headers");
  });

  it("Ensure GetVersionDetailsv2203 is properly declared", async function () {
    const GetVersionDetailsv2203Declaration = parsed.declarations.find(
      (x) => x.name === "GetVersionDetailsv2203"
    ) as InterfaceDeclaration;
    const properties = GetVersionDetailsv2203Declaration.properties;
    false;
    const CodeDeclaration = properties.find((x) => x.name === "code");
    expect(CodeDeclaration).be.an("object");
    expect(CodeDeclaration.type).be.equal('"203"');

    const ContentDeclaration = properties.find((x) => x.name === "content");
    expect(ContentDeclaration).be.an("object");
    expect(ContentDeclaration.type).be.equal("any");

    const HeadersDeclaration = properties.find((x) => x.name === "headers");
    expect(HeadersDeclaration).be.an("object");
    expect(HeadersDeclaration.type).be.equal("Headers");
  });

  it("Ensure Api is properly declared", async function () {
    const ApiDeclaration = parsed.declarations.find(
      (x) => x.name === "Api"
    ) as InterfaceDeclaration;
    const properties = ApiDeclaration.properties;
    false;
    const ListVersionsv2Declaration = properties.find(
      (x) => x.name === "ListVersionsv2"
    );
    expect(ListVersionsv2Declaration).be.an("object");
    expect(ListVersionsv2Declaration.type).be.equal("ListVersionsv2");

    const GetVersionDetailsv2Declaration = properties.find(
      (x) => x.name === "GetVersionDetailsv2"
    );
    expect(GetVersionDetailsv2Declaration).be.an("object");
    expect(GetVersionDetailsv2Declaration.type).be.equal("GetVersionDetailsv2");
  });

  it("Ensure Map is properly declared", async function () {
    const MapDeclaration = parsed.declarations.find(
      (x) => x.name === "Map"
    ) as InterfaceDeclaration;
    const properties = MapDeclaration.properties;
    expect(properties.length).to.equal(0);
  });
});
