import { expect } from "chai";
import { createApi } from "../../src/typefetch";
import {
  TypescriptParser,
  InterfaceDeclaration,
  File,
} from "typescript-parser";

let parsed: File;

describe("Test declarations for samples/v2/petstore.json", function () {
  this.beforeAll(async () => {
    const api = await createApi("samples/v2/petstore.json");
    const parser = new TypescriptParser();
    parsed = await parser.parseSource(api);
  });

  it("Ensure ListPetsBody is properly declared", async function () {
    const ListPetsBodyDeclaration = parsed.declarations.find(
      (x) => x.name === "ListPetsBody"
    ) as InterfaceDeclaration;
    const properties = ListPetsBodyDeclaration.properties;
    expect(properties.length).to.equal(0);
  });

  it("Ensure ListPetsQuery is properly declared", async function () {
    const ListPetsQueryDeclaration = parsed.declarations.find(
      (x) => x.name === "ListPetsQuery"
    ) as InterfaceDeclaration;
    const properties = ListPetsQueryDeclaration.properties;
    false;
    const LimitDeclaration = properties.find((x) => x.name === "limit");
    expect(LimitDeclaration).be.an("object");
    expect(LimitDeclaration.type).be.equal("number");
  });

  it("Ensure ListPetsHeader is properly declared", async function () {
    const ListPetsHeaderDeclaration = parsed.declarations.find(
      (x) => x.name === "ListPetsHeader"
    ) as InterfaceDeclaration;
    const properties = ListPetsHeaderDeclaration.properties;
    expect(properties.length).to.equal(0);
  });

  it("Ensure ListPetsPath is properly declared", async function () {
    const ListPetsPathDeclaration = parsed.declarations.find(
      (x) => x.name === "ListPetsPath"
    ) as InterfaceDeclaration;
    const properties = ListPetsPathDeclaration.properties;
    expect(properties.length).to.equal(0);
  });

  it("Ensure ListPets200 is properly declared", async function () {
    const ListPets200Declaration = parsed.declarations.find(
      (x) => x.name === "ListPets200"
    ) as InterfaceDeclaration;
    const properties = ListPets200Declaration.properties;
    false;
    const CodeDeclaration = properties.find((x) => x.name === "code");
    expect(CodeDeclaration).be.an("object");
    expect(CodeDeclaration.type).be.equal('"200"');

    const ContentDeclaration = properties.find((x) => x.name === "content");
    expect(ContentDeclaration).be.an("object");
    expect(ContentDeclaration.type).be.equal("undefined[]");

    const HeadersDeclaration = properties.find((x) => x.name === "headers");
    expect(HeadersDeclaration).be.an("object");
    expect(HeadersDeclaration.type).be.equal("Headers");
  });

  it("Ensure ListPetsdefault is properly declared", async function () {
    const ListPetsdefaultDeclaration = parsed.declarations.find(
      (x) => x.name === "ListPetsdefault"
    ) as InterfaceDeclaration;
    const properties = ListPetsdefaultDeclaration.properties;
    false;
    const CodeDeclaration = properties.find((x) => x.name === "code");
    expect(CodeDeclaration).be.an("object");
    expect(CodeDeclaration.type).be.equal('"default"');

    const ContentDeclaration = properties.find((x) => x.name === "content");
    expect(ContentDeclaration).be.an("object");
    expect(ContentDeclaration.type).be.equal("undefined");

    const HeadersDeclaration = properties.find((x) => x.name === "headers");
    expect(HeadersDeclaration).be.an("object");
    expect(HeadersDeclaration.type).be.equal("Headers");
  });

  it("Ensure CreatePetsBody is properly declared", async function () {
    const CreatePetsBodyDeclaration = parsed.declarations.find(
      (x) => x.name === "CreatePetsBody"
    ) as InterfaceDeclaration;
    const properties = CreatePetsBodyDeclaration.properties;
    expect(properties.length).to.equal(0);
  });

  it("Ensure CreatePetsQuery is properly declared", async function () {
    const CreatePetsQueryDeclaration = parsed.declarations.find(
      (x) => x.name === "CreatePetsQuery"
    ) as InterfaceDeclaration;
    const properties = CreatePetsQueryDeclaration.properties;
    expect(properties.length).to.equal(0);
  });

  it("Ensure CreatePetsHeader is properly declared", async function () {
    const CreatePetsHeaderDeclaration = parsed.declarations.find(
      (x) => x.name === "CreatePetsHeader"
    ) as InterfaceDeclaration;
    const properties = CreatePetsHeaderDeclaration.properties;
    expect(properties.length).to.equal(0);
  });

  it("Ensure CreatePetsPath is properly declared", async function () {
    const CreatePetsPathDeclaration = parsed.declarations.find(
      (x) => x.name === "CreatePetsPath"
    ) as InterfaceDeclaration;
    const properties = CreatePetsPathDeclaration.properties;
    expect(properties.length).to.equal(0);
  });

  it("Ensure CreatePets201 is properly declared", async function () {
    const CreatePets201Declaration = parsed.declarations.find(
      (x) => x.name === "CreatePets201"
    ) as InterfaceDeclaration;
    const properties = CreatePets201Declaration.properties;
    false;
    const CodeDeclaration = properties.find((x) => x.name === "code");
    expect(CodeDeclaration).be.an("object");
    expect(CodeDeclaration.type).be.equal('"201"');

    const ContentDeclaration = properties.find((x) => x.name === "content");
    expect(ContentDeclaration).be.an("object");
    expect(ContentDeclaration.type).be.equal("any");

    const HeadersDeclaration = properties.find((x) => x.name === "headers");
    expect(HeadersDeclaration).be.an("object");
    expect(HeadersDeclaration.type).be.equal("Headers");
  });

  it("Ensure CreatePetsdefault is properly declared", async function () {
    const CreatePetsdefaultDeclaration = parsed.declarations.find(
      (x) => x.name === "CreatePetsdefault"
    ) as InterfaceDeclaration;
    const properties = CreatePetsdefaultDeclaration.properties;
    false;
    const CodeDeclaration = properties.find((x) => x.name === "code");
    expect(CodeDeclaration).be.an("object");
    expect(CodeDeclaration.type).be.equal('"default"');

    const ContentDeclaration = properties.find((x) => x.name === "content");
    expect(ContentDeclaration).be.an("object");
    expect(ContentDeclaration.type).be.equal("undefined");

    const HeadersDeclaration = properties.find((x) => x.name === "headers");
    expect(HeadersDeclaration).be.an("object");
    expect(HeadersDeclaration.type).be.equal("Headers");
  });

  it("Ensure ShowPetByIdBody is properly declared", async function () {
    const ShowPetByIdBodyDeclaration = parsed.declarations.find(
      (x) => x.name === "ShowPetByIdBody"
    ) as InterfaceDeclaration;
    const properties = ShowPetByIdBodyDeclaration.properties;
    expect(properties.length).to.equal(0);
  });

  it("Ensure ShowPetByIdQuery is properly declared", async function () {
    const ShowPetByIdQueryDeclaration = parsed.declarations.find(
      (x) => x.name === "ShowPetByIdQuery"
    ) as InterfaceDeclaration;
    const properties = ShowPetByIdQueryDeclaration.properties;
    expect(properties.length).to.equal(0);
  });

  it("Ensure ShowPetByIdHeader is properly declared", async function () {
    const ShowPetByIdHeaderDeclaration = parsed.declarations.find(
      (x) => x.name === "ShowPetByIdHeader"
    ) as InterfaceDeclaration;
    const properties = ShowPetByIdHeaderDeclaration.properties;
    expect(properties.length).to.equal(0);
  });

  it("Ensure ShowPetByIdPath is properly declared", async function () {
    const ShowPetByIdPathDeclaration = parsed.declarations.find(
      (x) => x.name === "ShowPetByIdPath"
    ) as InterfaceDeclaration;
    const properties = ShowPetByIdPathDeclaration.properties;
    false;
    const PetIdDeclaration = properties.find((x) => x.name === "petId");
    expect(PetIdDeclaration).be.an("object");
    expect(PetIdDeclaration.type).be.equal("string");
  });

  it("Ensure ShowPetById200 is properly declared", async function () {
    const ShowPetById200Declaration = parsed.declarations.find(
      (x) => x.name === "ShowPetById200"
    ) as InterfaceDeclaration;
    const properties = ShowPetById200Declaration.properties;
    false;
    const CodeDeclaration = properties.find((x) => x.name === "code");
    expect(CodeDeclaration).be.an("object");
    expect(CodeDeclaration.type).be.equal('"200"');

    const ContentDeclaration = properties.find((x) => x.name === "content");
    expect(ContentDeclaration).be.an("object");
    expect(ContentDeclaration.type).be.equal("undefined[]");

    const HeadersDeclaration = properties.find((x) => x.name === "headers");
    expect(HeadersDeclaration).be.an("object");
    expect(HeadersDeclaration.type).be.equal("Headers");
  });

  it("Ensure ShowPetByIddefault is properly declared", async function () {
    const ShowPetByIddefaultDeclaration = parsed.declarations.find(
      (x) => x.name === "ShowPetByIddefault"
    ) as InterfaceDeclaration;
    const properties = ShowPetByIddefaultDeclaration.properties;
    false;
    const CodeDeclaration = properties.find((x) => x.name === "code");
    expect(CodeDeclaration).be.an("object");
    expect(CodeDeclaration.type).be.equal('"default"');

    const ContentDeclaration = properties.find((x) => x.name === "content");
    expect(ContentDeclaration).be.an("object");
    expect(ContentDeclaration.type).be.equal("undefined");

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
    const ListPetsDeclaration = properties.find((x) => x.name === "ListPets");
    expect(ListPetsDeclaration).be.an("object");
    expect(ListPetsDeclaration.type).be.equal("ListPets");

    const CreatePetsDeclaration = properties.find(
      (x) => x.name === "CreatePets"
    );
    expect(CreatePetsDeclaration).be.an("object");
    expect(CreatePetsDeclaration.type).be.equal("CreatePets");

    const ShowPetByIdDeclaration = properties.find(
      (x) => x.name === "ShowPetById"
    );
    expect(ShowPetByIdDeclaration).be.an("object");
    expect(ShowPetByIdDeclaration.type).be.equal("ShowPetById");
  });

  it("Ensure Map is properly declared", async function () {
    const MapDeclaration = parsed.declarations.find(
      (x) => x.name === "Map"
    ) as InterfaceDeclaration;
    const properties = MapDeclaration.properties;
    expect(properties.length).to.equal(0);
  });
});
