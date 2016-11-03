<?php 
defined('BASEPATH') OR exit ('Dupa !!');

class Cases_model extends CI_Controller {

	public function get( $id = false )
	{
        
       
        
        if( $id == false)
        {
            $q = $this->db->get( 'casesview' );
            $q = $q->result();
        }
	    else {
            //echo "Moje id: " + id;
            $this->db->where( 'id', $id );
            $q = $this->db->get('casesview');
            $q = $q->row();
        }
       

       return  $q ;
       
       //echo 'Users... ';
	}

    public function update($caseEdit){
        
        $this->db->where( 'id', $caseEdit['id']);
        $this->db->update('cases', $caseEdit );
        
    }
    
    public function create($caseEdit)
    {
        $this->db->insert('cases', $caseEdit);
    }
    
    public function delete($caseEdit)
    {
        $this->db->where( 'id', $caseEdit['id']);
        $this->db->delete('cases');
    }
}
?>