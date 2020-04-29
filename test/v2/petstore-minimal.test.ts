import { expect } from "chai";
import { createApi } from "../../src/typefetch";
import {
  TypescriptParser,
  InterfaceDeclaration,
  File,
} from "typescript-parser";

let parsed: File;

describe("Test declarations for samples/v2/petstore-minimal.json", function () {
  this.beforeAll(async () => {
    const api = await createApi("samples/v2/petstore-minimal.json");
    const parser = new TypescriptParser();
    parsed = await parser.parseSource(api);
  });

  it("Ensure PetsGETBody is properly declared", async function () {
    const PetsGETBodyDeclaration = parsed.declarations.find(
      (x) => x.name === "Pets_GETBody"
    ) as InterfaceDeclaration;
    const properties = PetsGETBodyDeclaration.properties;
    expect(properties.length).to.equal(0);
  });

  it("Ensure PetsGETQuery is properly declared", async function () {
    const PetsGETQueryDeclaration = parsed.declarations.find(
      (x) => x.name === "Pets_GETQuery"
    ) as InterfaceDeclaration;
    const properties = PetsGETQueryDeclaration.properties;
    expect(properties.length).to.equal(0);
  });

  it("Ensure PetsGETHeader is properly declared", async function () {
    const PetsGETHeaderDeclaration = parsed.declarations.find(
      (x) => x.name === "Pets_GETHeader"
    ) as InterfaceDeclaration;
    const properties = PetsGETHeaderDeclaration.properties;
    expect(properties.length).to.equal(0);
  });

  it("Ensure PetsGETPath is properly declared", async function () {
    const PetsGETPathDeclaration = parsed.declarations.find(
      (x) => x.name === "Pets_GETPath"
    ) as InterfaceDeclaration;
    const properties = PetsGETPathDeclaration.properties;
    expect(properties.length).to.equal(0);
  });

  it("Ensure PetsGET200 is properly declared", async function () {
    const PetsGET200Declaration = parsed.declarations.find(
      (x) => x.name === "Pets_GET200"
    ) as InterfaceDeclaration;
    const properties = PetsGET200Declaration.properties;
    false;
    const CodeDeclaration = properties.find((x) => x.name === "code");
    expect(CodeDeclaration).be.an("object");
    expect(CodeDeclaration.type).be.equal('"200"');

    const ContentDeclaration = properties.find((x) => x.name === "content");
    expect(ContentDeclaration).be.an("object");
    expect(ContentDeclaration.type).be.equal(
      "{ id: number; name: string; tag: string }[]"
    );

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
    const PetsGETDeclaration = properties.find((x) => x.name === "Pets_GET");
    expect(PetsGETDeclaration).be.an("object");
    expect(PetsGETDeclaration.type).be.equal("Pets_GET");
  });

  it("Ensure Map is properly declared", async function () {
    const MapDeclaration = parsed.declarations.find(
      (x) => x.name === "Map"
    ) as InterfaceDeclaration;
    const properties = MapDeclaration.properties;
    expect(properties.length).to.equal(0);
  });
});
