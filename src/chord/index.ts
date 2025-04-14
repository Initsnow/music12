import {Chord} from "./cls/ChordClass.ts"
import chordMeta from "./static/chordMeta.ts";
import findChord from "../find/findChord.ts";
import findChordInScale from "../find/findChordInScale.ts";
import getChordSymbolByKey from "./methods/getChordSymbolByKey.ts";
import getChordCnNameByKey from "./methods/getChordCnNameByKey.ts";
import findNotesInChord from "../find/findNotesInChord.ts";

export default {
  Chord, chordMeta, findChord, findChordInScale, getChordSymbolByKey, getChordCnNameByKey, findNotesInChord
}
