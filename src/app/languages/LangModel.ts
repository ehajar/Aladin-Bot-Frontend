export default class LangModel{

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
  detectedLang = "You are speaking English";
  greetingList = ["Hello","Hi","Hey"];
  makersList = ["my coders are","my creators are", "my developers are"]
  makers = " <strong>Hajar EL HAKOUR</strong> & <strong>Anass AIT BEN EL ARBI</strong> 😁"

  getFromCode(catCode:Number): String{
    switch (catCode){
      case 0 : return LangModel.randomise(this.greetingList)+ this.greetings
      case 3 : return LangModel.randomise(this.makersList)+ this.makers
    }
    return "";
  }

  private static randomise(list:Array<String>){
    const indx = Math.floor(Math.random() * (list.length-1));
    return list[indx];
  }
}
