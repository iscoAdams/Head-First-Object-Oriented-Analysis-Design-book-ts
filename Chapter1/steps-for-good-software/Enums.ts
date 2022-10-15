/*
   ? instead of using hardcoded values that may lead to unexpected behaviours
   ? i'm using enums to define set of named constants 
   ? meaning that I limit the possible values for the type name I create 
   ? which make it easier to define distinct cases that are valid
   ? we now can worry no more as we now can avoid typos with compiler warnings
   ? for any value that out of the standard ranges or out of the legal values 
   ? and every class or method that use those types are now protected. 
   ? no more misspelling or case issues...
   ? we’ve added both type safety and value safety with these enums
*/
enum Type {
  ACOUSTIC,
  ELECTRIC,
}
class TypeUtil {
  static toString(type: Type): string {
    switch (type) {
      case Type.ACOUSTIC:
        return "acoustic";
      case Type.ELECTRIC:
        return "electric";
    }
  }
}

enum Builder {
  FENDER,
  MARTIN,
  GIBSON,
  COLLINGS,
  OLSON,
  RYAN,
  PRS,
  ANY,
}
class BuilderUtil {
  static toString(builder: Builder): string {
    switch (builder) {
      case Builder.FENDER:
        return "Fender";
      case Builder.MARTIN:
        return "Martin";
      case Builder.GIBSON:
        return "Gibson";
      case Builder.COLLINGS:
        return "Collings";
      case Builder.OLSON:
        return "Olson";
      case Builder.RYAN:
        return "Ryan";
      case Builder.PRS:
        return "PRS";
      case Builder.ANY:
        return "Any";
    }
  }
}

enum Wood {
  INDIAN_ROSEWOOD,
  BRAZILIAN_ROSEWOOD,
  MAHOGANY,
  MAPLE,
  COCOBOLO,
  CEDAR,
  ADIRONDACK,
  ALDER,
  SITKA,
}
class WoodUtil {
  static toString(wood: Wood): string {
    switch (wood) {
      case Wood.INDIAN_ROSEWOOD:
        return "Indian Rosewood";
      case Wood.BRAZILIAN_ROSEWOOD:
        return "Brazilian Rosewood";
      case Wood.MAHOGANY:
        return "Mahogany";
      case Wood.MAPLE:
        return "Maple";
      case Wood.COCOBOLO:
        return "Cocobolo";
      case Wood.CEDAR:
        return "Cedar";
      case Wood.ADIRONDACK:
        return "Adirondack";
      case Wood.ALDER:
        return "Alder";
      case Wood.SITKA:
        return "Sitka";
    }
  }
}
export { Type, Builder, Wood, TypeUtil, BuilderUtil, WoodUtil };

//ex...
console.log(TypeUtil.toString(Type.ACOUSTIC)); //acoustic
