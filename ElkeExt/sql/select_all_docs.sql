select *,base_doc_entoli.rec_id as doc_entoli_id,
from base_doc_entoli,base_scidir,base_research,base_beneficiary,base_fellow,base_doc_entoli_type where
base_doc_entoli.scidir_id=base_scidir.rec_id and
base_doc_entoli.research_id=base_research.rec_id and
base_doc_entoli.benef_id=base_beneficiary.rec_id and
base_doc_entoli.fellow_id=base_fellow.rec_id and
base_doc_entoli.entoli_type_id=base_doc_entoli_type.rec_id

               