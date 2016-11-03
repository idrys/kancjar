<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Clients extends CI_Controller {

	public function __construct()
	{
		parent::__construct();
		$post = file_get_contents( 'php://input' );
		$_POST = json_decode( $post , true );      
        $this->load->model( 'Clients_model' );
         
	}

	public function get($id = false)
	{
       $outputClients = $this->Clients_model->get( $id );  
       echo json_encode( $outputClients );
       
	}
    
    public function getCaseID($id){        
       $outputClients = $this->Clients_model->getCaseID( $id );       
       echo json_encode( $outputClients );
       return $outputClients;
        
    }
    
    public function getID($clientEdit)
	{	 
        echo " Klientami. elementów" ;
        /*
        if (is_array($clientEdit) && sizeof($clientEdit)>1){
            
            echo "Błąd ta funkcja nie potrafi obsłuyć tablicę z klientami. " + sizeof($clientEdit) + " elementów"; 
            return null;
        }
         
         */
       $outputID = $this->Clients_model->getID( $clientEdit);  
       echo json_encode( $outputID );
       return $outputID;
       //echo 'Users...';
	}

    public function getIDs($clientsEdit){
        $outputID[] = array();

        foreach ($clientsEdit as $id => $value) {
            $outputID[$id] = $this->Clients_model->getID( $clientEdit); 
        }
        var_dump( $outputID );
    }
    
    public function create($clientEdit = false)
    {
        //var_dump( $clientEdit) ;
        
        if($clientEdit == false)
            $clientEdit = $this->input->post( 'clientEdit' );
        $this->Clients_model->create( $clientEdit );
        
        
        var_dump($_POST);
    }    
    
    public function set(){
        $clientEdit = $this->input->post( 'clientEdit' );
        foreach ($clientEdit as $id => $value) {
            # code...
            echo serialize( $value['id']);
        }
        
    }    
    
    public function delete($clientEdit = false)
    {
        if($clientEdit == false)
            $clientEdit = $this->input->post( 'clientEdit' );
        $this->Clients_model->delete( $clientEdit ); 
        //echo "clientEdit: ";
        //echo $clientEdit;
    }
    
    public function dateleCase($CaseID){
        $this->Clients_model->deleteCase( $CaseID ); 
    }
}
?>