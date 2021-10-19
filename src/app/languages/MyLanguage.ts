import LangModel from "./LangModel";
import FrenchModel from "./FrenchModel";
import ArabicModel from "./ArabicModel";

const  UNKNOWN = -1;
const  FR = 0;
const  EN = 1;
const  AR = 2;

export default function getMyLanguage(code : Number):LangModel | null{
  switch (code){
    case FR : return new FrenchModel();
    case UNKNOWN : return null;
    case AR : return new ArabicModel();
    case EN : return new LangModel();
    default  : return new LangModel();
  }
}
