import { expect } from "chai";
import { createApi } from "../../src/typefetch";
import {
  TypescriptParser,
  InterfaceDeclaration,
  File,
} from "typescript-parser";

let parsed: File;

describe("Test declarations for samples/v2/petstore-with-external-docs.json", function () {
  this.beforeAll(async () => {
    const api = await createApi("samples/v2/petstore-with-external-docs.json");
    const parser = new TypescriptParser();
    parsed = await parser.parseSource(api);
  });

  it("Ensure FindPetsBody is properly declared", async function () {
    const FindPetsBodyDeclaration = parsed.declarations.find(
      (x) => x.name === "FindPetsBody"
    ) as InterfaceDeclaration;
    const properties = FindPetsBodyDeclaration.properties;
    expect(properties.length).to.equal(0);
  });

  it("Ensure FindPetsQuery is properly declared", async function () {
    const FindPetsQueryDeclaration = parsed.declarations.find(
      (x) => x.name === "FindPetsQuery"
    ) as InterfaceDeclaration;
    const properties = FindPetsQueryDeclaration.properties;
    false;
    const TagsDeclaration = properties.find((x) => x.name === "tags");
    expect(TagsDeclaration).be.an("object");
    expect(TagsDeclaration.type).be.equal("string[]");

    const LimitDeclaration = properties.find((x) => x.name === "limit");
    expect(LimitDeclaration).be.an("object");
    expect(LimitDeclaration.type).be.equal("number");
  });

  it("Ensure FindPetsHeader is properly declared", async function () {
    const FindPetsHeaderDeclaration = parsed.declarations.find(
      (x) => x.name === "FindPetsHeader"
    ) as InterfaceDeclaration;
    const properties = FindPetsHeaderDeclaration.properties;
    expect(properties.length).to.equal(0);
  });

  it("Ensure FindPetsPath is properly declared", async function () {
    const FindPetsPathDeclaration = parsed.declarations.find(
      (x) => x.name === "FindPetsPath"
    ) as InterfaceDeclaration;
    const properties = FindPetsPathDeclaration.properties;
    expect(properties.length).to.equal(0);
  });

  it("Ensure FindPets200 is properly declared", async function () {
    const FindPets200Declaration = parsed.declarations.find(
      (x) => x.name === "FindPets200"
    ) as InterfaceDeclaration;
    const properties = FindPets200Declaration.properties;
    false;
    const CodeDeclaration = properties.find((x) => x.name === "code");
    expect(CodeDeclaration).be.an("object");
    expect(CodeDeclaration.type).be.equal('"200"');

    const ContentDeclaration = properties.find((x) => x.name === "content");
    expect(ContentDeclaration).be.an("object");
    expect(ContentDeclaration.type).be.equal(
      "{ name: string; tag: string; id: number }[]"
    );

    const HeadersDeclaration = properties.find((x) => x.name === "headers");
    expect(HeadersDeclaration).be.an("object");
    expect(HeadersDeclaration.type).be.equal("Headers");
  });

  it("Ensure FindPetsdefault is properly declared", async function () {
    const FindPetsdefaultDeclaration = parsed.declarations.find(
      (x) => x.name === "FindPetsdefault"
    ) as InterfaceDeclaration;
    const properties = FindPetsdefaultDeclaration.properties;
    false;
    const CodeDeclaration = properties.find((x) => x.name === "code");
    expect(CodeDeclaration).be.an("object");
    expect(CodeDeclaration.type).be.equal('"default"');

    const ContentDeclaration = properties.find((x) => x.name === "content");
    expect(ContentDeclaration).be.an("object");
    expect(ContentDeclaration.type).be.equal(
      "{ code: number; message: string }"
    );

    const HeadersDeclaration = properties.find((x) => x.name === "headers");
    expect(HeadersDeclaration).be.an("object");
    expect(HeadersDeclaration.type).be.equal("Headers");
  });

  it("Ensure AddPetBody is properly declared", async function () {
    const AddPetBodyDeclaration = parsed.declarations.find(
      (x) => x.name === "AddPetBody"
    ) as InterfaceDeclaration;
    const properties = AddPetBodyDeclaration.properties;
    false;
    const PetDeclaration = properties.find((x) => x.name === "pet");
    expect(PetDeclaration).be.an("object");
    expect(PetDeclaration.type).be.equal("{ name: string; tag: string }");
  });

  it("Ensure AddPetQuery is properly declared", async function () {
    const AddPetQueryDeclaration = parsed.declarations.find(
      (x) => x.name === "AddPetQuery"
    ) as InterfaceDeclaration;
    const properties = AddPetQueryDeclaration.properties;
    expect(properties.length).to.equal(0);
  });

  it("Ensure AddPetHeader is properly declared", async function () {
    const AddPetHeaderDeclaration = parsed.declarations.find(
      (x) => x.name === "AddPetHeader"
    ) as InterfaceDeclaration;
    const properties = AddPetHeaderDeclaration.properties;
    expect(properties.length).to.equal(0);
  });

  it("Ensure AddPetPath is properly declared", async function () {
    const AddPetPathDeclaration = parsed.declarations.find(
      (x) => x.name === "AddPetPath"
    ) as InterfaceDeclaration;
    const properties = AddPetPathDeclaration.properties;
    expect(properties.length).to.equal(0);
  });

  it("Ensure AddPet200 is properly declared", async function () {
    const AddPet200Declaration = parsed.declarations.find(
      (x) => x.name === "AddPet200"
    ) as InterfaceDeclaration;
    const properties = AddPet200Declaration.properties;
    false;
    const CodeDeclaration = properties.find((x) => x.name === "code");
    expect(CodeDeclaration).be.an("object");
    expect(CodeDeclaration.type).be.equal('"200"');

    const ContentDeclaration = properties.find((x) => x.name === "content");
    expect(ContentDeclaration).be.an("object");
    expect(ContentDeclaration.type).be.equal(
      "{ name: string; tag: string; id: number }"
    );

    const HeadersDeclaration = properties.find((x) => x.name === "headers");
    expect(HeadersDeclaration).be.an("object");
    expect(HeadersDeclaration.type).be.equal("Headers");
  });

  it("Ensure AddPetdefault is properly declared", async function () {
    const AddPetdefaultDeclaration = parsed.declarations.find(
      (x) => x.name === "AddPetdefault"
    ) as InterfaceDeclaration;
    const properties = AddPetdefaultDeclaration.properties;
    false;
    const CodeDeclaration = properties.find((x) => x.name === "code");
    expect(CodeDeclaration).be.an("object");
    expect(CodeDeclaration.type).be.equal('"default"');

    const ContentDeclaration = properties.find((x) => x.name === "content");
    expect(ContentDeclaration).be.an("object");
    expect(ContentDeclaration.type).be.equal(
      "{ code: number; message: string }"
    );

    const HeadersDeclaration = properties.find((x) => x.name === "headers");
    expect(HeadersDeclaration).be.an("object");
    expect(HeadersDeclaration.type).be.equal("Headers");
  });

  it("Ensure FindPetByIdBody is properly declared", async function () {
    const FindPetByIdBodyDeclaration = parsed.declarations.find(
      (x) => x.name === "FindPetByIdBody"
    ) as InterfaceDeclaration;
    const properties = FindPetByIdBodyDeclaration.properties;
    expect(properties.length).to.equal(0);
  });

  it("Ensure FindPetByIdQuery is properly declared", async function () {
    const FindPetByIdQueryDeclaration = parsed.declarations.find(
      (x) => x.name === "FindPetByIdQuery"
    ) as InterfaceDeclaration;
    const properties = FindPetByIdQueryDeclaration.properties;
    expect(properties.length).to.equal(0);
  });

  it("Ensure FindPetByIdHeader is properly declared", async function () {
    const FindPetByIdHeaderDeclaration = parsed.declarations.find(
      (x) => x.name === "FindPetByIdHeader"
    ) as InterfaceDeclaration;
    const properties = FindPetByIdHeaderDeclaration.properties;
    expect(properties.length).to.equal(0);
  });

  it("Ensure FindPetByIdPath is properly declared", async function () {
    const FindPetByIdPathDeclaration = parsed.declarations.find(
      (x) => x.name === "FindPetByIdPath"
    ) as InterfaceDeclaration;
    const properties = FindPetByIdPathDeclaration.properties;
    false;
    const IdDeclaration = properties.find((x) => x.name === "id");
    expect(IdDeclaration).be.an("object");
    expect(IdDeclaration.type).be.equal("number");
  });

  it("Ensure FindPetById200 is properly declared", async function () {
    const FindPetById200Declaration = parsed.declarations.find(
      (x) => x.name === "FindPetById200"
    ) as InterfaceDeclaration;
    const properties = FindPetById200Declaration.properties;
    false;
    const CodeDeclaration = properties.find((x) => x.name === "code");
    expect(CodeDeclaration).be.an("object");
    expect(CodeDeclaration.type).be.equal('"200"');

    const ContentDeclaration = properties.find((x) => x.name === "content");
    expect(ContentDeclaration).be.an("object");
    expect(ContentDeclaration.type).be.equal(
      "{ name: string; tag: string; id: number }"
    );

    const HeadersDeclaration = properties.find((x) => x.name === "headers");
    expect(HeadersDeclaration).be.an("object");
    expect(HeadersDeclaration.type).be.equal("Headers");
  });

  it("Ensure FindPetByIddefault is properly declared", async function () {
    const FindPetByIddefaultDeclaration = parsed.declarations.find(
      (x) => x.name === "FindPetByIddefault"
    ) as InterfaceDeclaration;
    const properties = FindPetByIddefaultDeclaration.properties;
    false;
    const CodeDeclaration = properties.find((x) => x.name === "code");
    expect(CodeDeclaration).be.an("object");
    expect(CodeDeclaration.type).be.equal('"default"');

    const ContentDeclaration = properties.find((x) => x.name === "content");
    expect(ContentDeclaration).be.an("object");
    expect(ContentDeclaration.type).be.equal(
      "{ code: number; message: string }"
    );

    const HeadersDeclaration = properties.find((x) => x.name === "headers");
    expect(HeadersDeclaration).be.an("object");
    expect(HeadersDeclaration.type).be.equal("Headers");
  });

  it("Ensure DeletePetBody is properly declared", async function () {
    const DeletePetBodyDeclaration = parsed.declarations.find(
      (x) => x.name === "DeletePetBody"
    ) as InterfaceDeclaration;
    const properties = DeletePetBodyDeclaration.properties;
    expect(properties.length).to.equal(0);
  });

  it("Ensure DeletePetQuery is properly declared", async function () {
    const DeletePetQueryDeclaration = parsed.declarations.find(
      (x) => x.name === "DeletePetQuery"
    ) as InterfaceDeclaration;
    const properties = DeletePetQueryDeclaration.properties;
    expect(properties.length).to.equal(0);
  });

  it("Ensure DeletePetHeader is properly declared", async function () {
    const DeletePetHeaderDeclaration = parsed.declarations.find(
      (x) => x.name === "DeletePetHeader"
    ) as InterfaceDeclaration;
    const properties = DeletePetHeaderDeclaration.properties;
    expect(properties.length).to.equal(0);
  });

  it("Ensure DeletePetPath is properly declared", async function () {
    const DeletePetPathDeclaration = parsed.declarations.find(
      (x) => x.name === "DeletePetPath"
    ) as InterfaceDeclaration;
    const properties = DeletePetPathDeclaration.properties;
    false;
    const IdDeclaration = properties.find((x) => x.name === "id");
    expect(IdDeclaration).be.an("object");
    expect(IdDeclaration.type).be.equal("number");
  });

  it("Ensure DeletePet204 is properly declared", async function () {
    const DeletePet204Declaration = parsed.declarations.find(
      (x) => x.name === "DeletePet204"
    ) as InterfaceDeclaration;
    const properties = DeletePet204Declaration.properties;
    false;
    const CodeDeclaration = properties.find((x) => x.name === "code");
    expect(CodeDeclaration).be.an("object");
    expect(CodeDeclaration.type).be.equal('"204"');

    const ContentDeclaration = properties.find((x) => x.name === "content");
    expect(ContentDeclaration).be.an("object");
    expect(ContentDeclaration.type).be.equal("any");

    const HeadersDeclaration = properties.find((x) => x.name === "headers");
    expect(HeadersDeclaration).be.an("object");
    expect(HeadersDeclaration.type).be.equal("Headers");
  });

  it("Ensure DeletePetdefault is properly declared", async function () {
    const DeletePetdefaultDeclaration = parsed.declarations.find(
      (x) => x.name === "DeletePetdefault"
    ) as InterfaceDeclaration;
    const properties = DeletePetdefaultDeclaration.properties;
    false;
    const CodeDeclaration = properties.find((x) => x.name === "code");
    expect(CodeDeclaration).be.an("object");
    expect(CodeDeclaration.type).be.equal('"default"');

    const ContentDeclaration = properties.find((x) => x.name === "content");
    expect(ContentDeclaration).be.an("object");
    expect(ContentDeclaration.type).be.equal(
      "{ code: number; message: string }"
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
    const FindPetsDeclaration = properties.find((x) => x.name === "FindPets");
    expect(FindPetsDeclaration).be.an("object");
    expect(FindPetsDeclaration.type).be.equal("FindPets");

    const AddPetDeclaration = properties.find((x) => x.name === "AddPet");
    expect(AddPetDeclaration).be.an("object");
    expect(AddPetDeclaration.type).be.equal("AddPet");

    const FindPetByIdDeclaration = properties.find(
      (x) => x.name === "FindPetById"
    );
    expect(FindPetByIdDeclaration).be.an("object");
    expect(FindPetByIdDeclaration.type).be.equal("FindPetById");

    const DeletePetDeclaration = properties.find((x) => x.name === "DeletePet");
    expect(DeletePetDeclaration).be.an("object");
    expect(DeletePetDeclaration.type).be.equal("DeletePet");
  });

  it("Ensure Map is properly declared", async function () {
    const MapDeclaration = parsed.declarations.find(
      (x) => x.name === "Map"
    ) as InterfaceDeclaration;
    const properties = MapDeclaration.properties;
    expect(properties.length).to.equal(0);
  });
});
