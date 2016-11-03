<?php 
defined('BASEPATH') OR exit ('Dupa !!');

class Contacts_model extends CI_Controller {

	public function get( $id = false )
	{
        if( $id == false)
        {
            $q = $this->db->get( 'contacts' );
            $q = $q->result();
        }
	    else {
            $this->db->where( 'id', $id );
            $q = $this->db->get('contacts');
            $q = $q->row();
        }
       return  $q ;
	}
    
    public function update($contact){
        
        $this->db->where( 'id', $contact['id']);
        $this->db->update('contacts', $contact );
        
    }
    
    public function create($contact)
    {
        $this->db->insert('contacts', $contact);
    }
    
    public function delete($contact)
    {
        $this->db->where( 'id', $contact['id']);
        $this->db->delete('contacts');
    }
}