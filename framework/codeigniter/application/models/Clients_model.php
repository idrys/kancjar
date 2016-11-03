<?php 
defined('BASEPATH') OR exit ('Dupa !!');

class Clients_model extends CI_Controller {

	public function get( $id = false )
	{
        if( $id == false)
        {
            $q = $this->db->get( 'clients' );
            $q = $q->result();
        }
	    else {
            $this->db->where( 'id', $id );
            $q = $this->db->get('clients');
            $q = $q->row();
        }
       return  $q ;
       //echo 'Users...';
	}
    
    public function getCaseID( $id )
	{
       $q = $this->db->where('CaseID', $id );
       $q = $this->db->get( 'clients' );
       $q = $q->result();
       
       return  $q ;
       //echo 'Users...';
	}

    public function getID( $clientEdit )
    {
        echo "ContactID: "; 
        echo $clientEdit['ContactID'];

        $q = $this->db->where('CaseID', $clientEdit['CaseID'] );
        $q = $this->db->where('ContactID', $clientEdit['ContactID'] );
        $q = $this->db->get( 'clients' );
       
        $q = $q->row();
        return  $q->id;
    }
    
    public function update($clientEdit){
        
        $this->db->where( 'id', $clientEdit['id']);
        $this->db->update('clients', $clientEdit );
        
    }
    
    public function update2($clients){
        $caseID = $clients[0].CaseID;
        $DBClients = $this->get($CaseID);
        
        foreach ($variable as $id => $DBClients) {
            echo $variable;
        }
        
    }
    
    public function set($clientEdit)
    {
        $this->db->where( 'CaseID', $clientEdit['CaseID']);
        $this->db->where( 'ContactID', $clientEdit['ContactID']);    
        $q = $this->db->get('clients');
        $q = $q->result();
        $countRows = count($q);
        //echo $countRows;
        
        if ($countRows == 0) {           
            $this->create($clientEdit);
        } else if ($countRows == 1){
            return null;
        } else if ($countRows > 1 ){
            $this->delete($clientEdit);
        }

    }
    
    public function create($clientEdit)
    {
        $this->db->insert('clients', $clientEdit);
    }
    
    public function delete($id)
    {
        if (is_array($id))
            $this->db->where( 'id', $id['id']);
        else {
            $this->db->where( 'id', $id);
        }
        
        $this->db->delete('clients');
    }
    
    public function deleteCase($caseID)
    {
        $this->db->where( 'caseID', $caseID);
        $this->db->delete('clients');
    }
}