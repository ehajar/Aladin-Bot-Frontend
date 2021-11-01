import DateHelpers from "../helpers/DateHelpers";

export default class LangModel {

  /* const val UNKNOWN_CAT = -1;
   const val GREETINGS = 0;
   const val CONV_END = 1;
   const val EMERGENCY = 2;
   const val CREATE_DATA = 3;
   const val TIME_DATA = 4;
   const val BEST_PLACE = 5;
   const val BEST_FOOD = 6;*/

  code = 1;
  langShort = "eng"
  greetings = ", My name is Aladin-Bot! How can I help you?";
  detectedLang = "✔️ English detected!";
  greetingList = ["Hello", "Hi", "Hey"];
  makersList = ["my coders are", "my creators are", "my developers are"]
  unknownLanguage = "I can't understand you!"

  makers = " <strong>Hajar EL HAKOUR</strong> & <strong>Anass AIT BEN EL ARBI</strong> 😁"
  emergency = "<div>🚨 here are all the emergency contacts in Morocco: <ul> " +
    "<li style='margin-left: 10px'>Police : <a href='tel:19'>19</a></li>" +
    "<li style='margin-left: 10px'>Royal Gendarmerie : <a href='tel:177'>177</a></li>" +
    "<li style='margin-left: 10px'>Ambulance : <a href='tel:177'>15</a></li>" +
    "<li style='margin-left: 10px'>Fire Brigade : <a href='tel:15'>15</a></li> </ul></div>"

  checkTime = ["Let me check the time for you ... It is", "It is", "Let me see my watch ... It is", "Let me ask a friend ... It's"]

  bestPlaces = ["There are a lot of beautifull places in Morocco Like :",
    "Every Moroccan place has it's beauty but you can check out ",
    "There are too many nice places for me to decide let me randomize it for you... Ohh I have got :"]

  places = ["Tangier", "Oualili", "Marakesh", "Asilah", "Fes", "Tetouan", "Chefchaouen", "Essaouira"]


  getFromCode(catCode: Number): String {
    switch (catCode) {
      case 0 :
        return LangModel.randomise(this.greetingList) + this.greetings
      case 2 :
        return this.emergency
      case 3 :
        return LangModel.randomise(this.makersList) + this.makers
      case 4 :
        return LangModel.randomise(this.checkTime) + " " + DateHelpers.getTime();
      case 5 :
        return LangModel.randomise(this.bestPlaces) + " " + LangModel.randomise(this.places);
      case 6 :
        return LangModel.randomise(this.bestPlaces) + " " + LangModel.randomise(this.places);
    }
    return "";
  }

  private static randomise(list: Array<String>) {
    const indx = Math.floor(Math.random() * (list.length - 1));
    return list[indx];
  }
}
