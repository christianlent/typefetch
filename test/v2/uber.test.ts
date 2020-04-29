import { expect } from "chai";
import { createApi } from "../../src/typefetch";
import {
  TypescriptParser,
  InterfaceDeclaration,
  File,
} from "typescript-parser";

let parsed: File;

describe("Test declarations for samples/v2/uber.json", function () {
  this.beforeAll(async () => {
    const api = await createApi("samples/v2/uber.json");
    const parser = new TypescriptParser();
    parsed = await parser.parseSource(api);
  });

  it("Ensure ProductsGETBody is properly declared", async function () {
    const ProductsGETBodyDeclaration = parsed.declarations.find(
      (x) => x.name === "Products_GETBody"
    ) as InterfaceDeclaration;
    const properties = ProductsGETBodyDeclaration.properties;
    expect(properties.length).to.equal(0);
  });

  it("Ensure ProductsGETQuery is properly declared", async function () {
    const ProductsGETQueryDeclaration = parsed.declarations.find(
      (x) => x.name === "Products_GETQuery"
    ) as InterfaceDeclaration;
    const properties = ProductsGETQueryDeclaration.properties;
    false;
    const LatitudeDeclaration = properties.find((x) => x.name === "latitude");
    expect(LatitudeDeclaration).be.an("object");
    expect(LatitudeDeclaration.type).be.equal("number");

    const LongitudeDeclaration = properties.find((x) => x.name === "longitude");
    expect(LongitudeDeclaration).be.an("object");
    expect(LongitudeDeclaration.type).be.equal("number");
  });

  it("Ensure ProductsGETHeader is properly declared", async function () {
    const ProductsGETHeaderDeclaration = parsed.declarations.find(
      (x) => x.name === "Products_GETHeader"
    ) as InterfaceDeclaration;
    const properties = ProductsGETHeaderDeclaration.properties;
    expect(properties.length).to.equal(0);
  });

  it("Ensure ProductsGETPath is properly declared", async function () {
    const ProductsGETPathDeclaration = parsed.declarations.find(
      (x) => x.name === "Products_GETPath"
    ) as InterfaceDeclaration;
    const properties = ProductsGETPathDeclaration.properties;
    expect(properties.length).to.equal(0);
  });

  it("Ensure ProductsGET200 is properly declared", async function () {
    const ProductsGET200Declaration = parsed.declarations.find(
      (x) => x.name === "Products_GET200"
    ) as InterfaceDeclaration;
    const properties = ProductsGET200Declaration.properties;
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

  it("Ensure ProductsGETdefault is properly declared", async function () {
    const ProductsGETdefaultDeclaration = parsed.declarations.find(
      (x) => x.name === "Products_GETdefault"
    ) as InterfaceDeclaration;
    const properties = ProductsGETdefaultDeclaration.properties;
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

  it("Ensure EstimatesPriceGETBody is properly declared", async function () {
    const EstimatesPriceGETBodyDeclaration = parsed.declarations.find(
      (x) => x.name === "EstimatesPrice_GETBody"
    ) as InterfaceDeclaration;
    const properties = EstimatesPriceGETBodyDeclaration.properties;
    expect(properties.length).to.equal(0);
  });

  it("Ensure EstimatesPriceGETQuery is properly declared", async function () {
    const EstimatesPriceGETQueryDeclaration = parsed.declarations.find(
      (x) => x.name === "EstimatesPrice_GETQuery"
    ) as InterfaceDeclaration;
    const properties = EstimatesPriceGETQueryDeclaration.properties;
    false;
    const StartLatitudeDeclaration = properties.find(
      (x) => x.name === "start_latitude"
    );
    expect(StartLatitudeDeclaration).be.an("object");
    expect(StartLatitudeDeclaration.type).be.equal("number");

    const StartLongitudeDeclaration = properties.find(
      (x) => x.name === "start_longitude"
    );
    expect(StartLongitudeDeclaration).be.an("object");
    expect(StartLongitudeDeclaration.type).be.equal("number");

    const EndLatitudeDeclaration = properties.find(
      (x) => x.name === "end_latitude"
    );
    expect(EndLatitudeDeclaration).be.an("object");
    expect(EndLatitudeDeclaration.type).be.equal("number");

    const EndLongitudeDeclaration = properties.find(
      (x) => x.name === "end_longitude"
    );
    expect(EndLongitudeDeclaration).be.an("object");
    expect(EndLongitudeDeclaration.type).be.equal("number");
  });

  it("Ensure EstimatesPriceGETHeader is properly declared", async function () {
    const EstimatesPriceGETHeaderDeclaration = parsed.declarations.find(
      (x) => x.name === "EstimatesPrice_GETHeader"
    ) as InterfaceDeclaration;
    const properties = EstimatesPriceGETHeaderDeclaration.properties;
    expect(properties.length).to.equal(0);
  });

  it("Ensure EstimatesPriceGETPath is properly declared", async function () {
    const EstimatesPriceGETPathDeclaration = parsed.declarations.find(
      (x) => x.name === "EstimatesPrice_GETPath"
    ) as InterfaceDeclaration;
    const properties = EstimatesPriceGETPathDeclaration.properties;
    expect(properties.length).to.equal(0);
  });

  it("Ensure EstimatesPriceGET200 is properly declared", async function () {
    const EstimatesPriceGET200Declaration = parsed.declarations.find(
      (x) => x.name === "EstimatesPrice_GET200"
    ) as InterfaceDeclaration;
    const properties = EstimatesPriceGET200Declaration.properties;
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

  it("Ensure EstimatesPriceGETdefault is properly declared", async function () {
    const EstimatesPriceGETdefaultDeclaration = parsed.declarations.find(
      (x) => x.name === "EstimatesPrice_GETdefault"
    ) as InterfaceDeclaration;
    const properties = EstimatesPriceGETdefaultDeclaration.properties;
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

  it("Ensure EstimatesTimeGETBody is properly declared", async function () {
    const EstimatesTimeGETBodyDeclaration = parsed.declarations.find(
      (x) => x.name === "EstimatesTime_GETBody"
    ) as InterfaceDeclaration;
    const properties = EstimatesTimeGETBodyDeclaration.properties;
    expect(properties.length).to.equal(0);
  });

  it("Ensure EstimatesTimeGETQuery is properly declared", async function () {
    const EstimatesTimeGETQueryDeclaration = parsed.declarations.find(
      (x) => x.name === "EstimatesTime_GETQuery"
    ) as InterfaceDeclaration;
    const properties = EstimatesTimeGETQueryDeclaration.properties;
    false;
    const StartLatitudeDeclaration = properties.find(
      (x) => x.name === "start_latitude"
    );
    expect(StartLatitudeDeclaration).be.an("object");
    expect(StartLatitudeDeclaration.type).be.equal("number");

    const StartLongitudeDeclaration = properties.find(
      (x) => x.name === "start_longitude"
    );
    expect(StartLongitudeDeclaration).be.an("object");
    expect(StartLongitudeDeclaration.type).be.equal("number");

    const CustomerUuidDeclaration = properties.find(
      (x) => x.name === "customer_uuid"
    );
    expect(CustomerUuidDeclaration).be.an("object");
    expect(CustomerUuidDeclaration.type).be.equal("string");

    const ProductIdDeclaration = properties.find(
      (x) => x.name === "product_id"
    );
    expect(ProductIdDeclaration).be.an("object");
    expect(ProductIdDeclaration.type).be.equal("string");
  });

  it("Ensure EstimatesTimeGETHeader is properly declared", async function () {
    const EstimatesTimeGETHeaderDeclaration = parsed.declarations.find(
      (x) => x.name === "EstimatesTime_GETHeader"
    ) as InterfaceDeclaration;
    const properties = EstimatesTimeGETHeaderDeclaration.properties;
    expect(properties.length).to.equal(0);
  });

  it("Ensure EstimatesTimeGETPath is properly declared", async function () {
    const EstimatesTimeGETPathDeclaration = parsed.declarations.find(
      (x) => x.name === "EstimatesTime_GETPath"
    ) as InterfaceDeclaration;
    const properties = EstimatesTimeGETPathDeclaration.properties;
    expect(properties.length).to.equal(0);
  });

  it("Ensure EstimatesTimeGET200 is properly declared", async function () {
    const EstimatesTimeGET200Declaration = parsed.declarations.find(
      (x) => x.name === "EstimatesTime_GET200"
    ) as InterfaceDeclaration;
    const properties = EstimatesTimeGET200Declaration.properties;
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

  it("Ensure EstimatesTimeGETdefault is properly declared", async function () {
    const EstimatesTimeGETdefaultDeclaration = parsed.declarations.find(
      (x) => x.name === "EstimatesTime_GETdefault"
    ) as InterfaceDeclaration;
    const properties = EstimatesTimeGETdefaultDeclaration.properties;
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

  it("Ensure MeGETBody is properly declared", async function () {
    const MeGETBodyDeclaration = parsed.declarations.find(
      (x) => x.name === "Me_GETBody"
    ) as InterfaceDeclaration;
    const properties = MeGETBodyDeclaration.properties;
    expect(properties.length).to.equal(0);
  });

  it("Ensure MeGETQuery is properly declared", async function () {
    const MeGETQueryDeclaration = parsed.declarations.find(
      (x) => x.name === "Me_GETQuery"
    ) as InterfaceDeclaration;
    const properties = MeGETQueryDeclaration.properties;
    expect(properties.length).to.equal(0);
  });

  it("Ensure MeGETHeader is properly declared", async function () {
    const MeGETHeaderDeclaration = parsed.declarations.find(
      (x) => x.name === "Me_GETHeader"
    ) as InterfaceDeclaration;
    const properties = MeGETHeaderDeclaration.properties;
    expect(properties.length).to.equal(0);
  });

  it("Ensure MeGETPath is properly declared", async function () {
    const MeGETPathDeclaration = parsed.declarations.find(
      (x) => x.name === "Me_GETPath"
    ) as InterfaceDeclaration;
    const properties = MeGETPathDeclaration.properties;
    expect(properties.length).to.equal(0);
  });

  it("Ensure MeGET200 is properly declared", async function () {
    const MeGET200Declaration = parsed.declarations.find(
      (x) => x.name === "Me_GET200"
    ) as InterfaceDeclaration;
    const properties = MeGET200Declaration.properties;
    false;
    const CodeDeclaration = properties.find((x) => x.name === "code");
    expect(CodeDeclaration).be.an("object");
    expect(CodeDeclaration.type).be.equal('"200"');

    const ContentDeclaration = properties.find((x) => x.name === "content");
    expect(ContentDeclaration).be.an("object");
    expect(ContentDeclaration.type).be.equal("undefined");

    const HeadersDeclaration = properties.find((x) => x.name === "headers");
    expect(HeadersDeclaration).be.an("object");
    expect(HeadersDeclaration.type).be.equal("Headers");
  });

  it("Ensure MeGETdefault is properly declared", async function () {
    const MeGETdefaultDeclaration = parsed.declarations.find(
      (x) => x.name === "Me_GETdefault"
    ) as InterfaceDeclaration;
    const properties = MeGETdefaultDeclaration.properties;
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

  it("Ensure HistoryGETBody is properly declared", async function () {
    const HistoryGETBodyDeclaration = parsed.declarations.find(
      (x) => x.name === "History_GETBody"
    ) as InterfaceDeclaration;
    const properties = HistoryGETBodyDeclaration.properties;
    expect(properties.length).to.equal(0);
  });

  it("Ensure HistoryGETQuery is properly declared", async function () {
    const HistoryGETQueryDeclaration = parsed.declarations.find(
      (x) => x.name === "History_GETQuery"
    ) as InterfaceDeclaration;
    const properties = HistoryGETQueryDeclaration.properties;
    false;
    const OffsetDeclaration = properties.find((x) => x.name === "offset");
    expect(OffsetDeclaration).be.an("object");
    expect(OffsetDeclaration.type).be.equal("number");

    const LimitDeclaration = properties.find((x) => x.name === "limit");
    expect(LimitDeclaration).be.an("object");
    expect(LimitDeclaration.type).be.equal("number");
  });

  it("Ensure HistoryGETHeader is properly declared", async function () {
    const HistoryGETHeaderDeclaration = parsed.declarations.find(
      (x) => x.name === "History_GETHeader"
    ) as InterfaceDeclaration;
    const properties = HistoryGETHeaderDeclaration.properties;
    expect(properties.length).to.equal(0);
  });

  it("Ensure HistoryGETPath is properly declared", async function () {
    const HistoryGETPathDeclaration = parsed.declarations.find(
      (x) => x.name === "History_GETPath"
    ) as InterfaceDeclaration;
    const properties = HistoryGETPathDeclaration.properties;
    expect(properties.length).to.equal(0);
  });

  it("Ensure HistoryGET200 is properly declared", async function () {
    const HistoryGET200Declaration = parsed.declarations.find(
      (x) => x.name === "History_GET200"
    ) as InterfaceDeclaration;
    const properties = HistoryGET200Declaration.properties;
    false;
    const CodeDeclaration = properties.find((x) => x.name === "code");
    expect(CodeDeclaration).be.an("object");
    expect(CodeDeclaration.type).be.equal('"200"');

    const ContentDeclaration = properties.find((x) => x.name === "content");
    expect(ContentDeclaration).be.an("object");
    expect(ContentDeclaration.type).be.equal("undefined");

    const HeadersDeclaration = properties.find((x) => x.name === "headers");
    expect(HeadersDeclaration).be.an("object");
    expect(HeadersDeclaration.type).be.equal("Headers");
  });

  it("Ensure HistoryGETdefault is properly declared", async function () {
    const HistoryGETdefaultDeclaration = parsed.declarations.find(
      (x) => x.name === "History_GETdefault"
    ) as InterfaceDeclaration;
    const properties = HistoryGETdefaultDeclaration.properties;
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
    const ProductsGETDeclaration = properties.find(
      (x) => x.name === "Products_GET"
    );
    expect(ProductsGETDeclaration).be.an("object");
    expect(ProductsGETDeclaration.type).be.equal("Products_GET");

    const EstimatesPriceGETDeclaration = properties.find(
      (x) => x.name === "EstimatesPrice_GET"
    );
    expect(EstimatesPriceGETDeclaration).be.an("object");
    expect(EstimatesPriceGETDeclaration.type).be.equal("EstimatesPrice_GET");

    const EstimatesTimeGETDeclaration = properties.find(
      (x) => x.name === "EstimatesTime_GET"
    );
    expect(EstimatesTimeGETDeclaration).be.an("object");
    expect(EstimatesTimeGETDeclaration.type).be.equal("EstimatesTime_GET");

    const MeGETDeclaration = properties.find((x) => x.name === "Me_GET");
    expect(MeGETDeclaration).be.an("object");
    expect(MeGETDeclaration.type).be.equal("Me_GET");

    const HistoryGETDeclaration = properties.find(
      (x) => x.name === "History_GET"
    );
    expect(HistoryGETDeclaration).be.an("object");
    expect(HistoryGETDeclaration.type).be.equal("History_GET");
  });

  it("Ensure Map is properly declared", async function () {
    const MapDeclaration = parsed.declarations.find(
      (x) => x.name === "Map"
    ) as InterfaceDeclaration;
    const properties = MapDeclaration.properties;
    expect(properties.length).to.equal(0);
  });
});
