import descensoAlHadesStorylets from "./descensoAlHades";
import elPactoStorylets from "./elPacto";
import ElPacto1 from "./elPacto/ElPacto1";
import elPalacioDeAlcinooStorylets from "./elPalacioDeAlcinoo";
import itacaStorylets from "./itaca";
import Itaca1 from "./itaca/Itaca1";
import lasSirenasStorylets from "./lasSirenas";
import laUltimaCenaStorylets from "./laUltimaCena";
import mendigandoEntrePretendientesStorylets from "./mendigandoEntrePretendientes";

export default {
  initial: Itaca1,
  values: [
    ...descensoAlHadesStorylets,
    ...elPactoStorylets,
    ...elPalacioDeAlcinooStorylets,
    ...itacaStorylets,
    ...lasSirenasStorylets,
    ...laUltimaCenaStorylets,
    ...mendigandoEntrePretendientesStorylets,
  ],
};
