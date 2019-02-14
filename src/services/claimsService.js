import axios from "axios";

export default function getClaims() {
  return axios({
    method: "GET",
    url:
      "https://diaas-dev.gtaia-test-domain.net/fid-dev-lux-10134/insurance/claims",
    headers: {
      NSP_USERID: "ACHANCE",
      "x-api-key": "48SmqcLpec3t1TO8EMzaDaamMz25pDZ469NFux41"
    },
    responseType: "json"
  }).then(response => {
    return mapResponseToUIModel(response.data);
  });
}

function mapResponseToUIModel(response) {
  const itemsArray = getItemsArray(response);
  return itemsArray.map(
    item =>
      (item &&
        item.summary && {
          id: item.summary["claim_event:identifier"],
          type: item.summary["claim_event:type"],
          cause: item.summary["claim_cause:type"],
          date: item.summary["claim_event:date"]
        }) ||
      {}
  );
}

function getItemsArray(response) {
  return (
    (response &&
      response._links &&
      response._links.item &&
      ((Array.isArray(response._links.item) && response._links.item) || [
        response._links.item
      ])) ||
    []
  );
}
