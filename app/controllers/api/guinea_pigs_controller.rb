class Api::GuineaPigsController < ApplicationController
  def index
    @guinea_pigs = GuineaPig.all

    render 'api/guinea_pigs/index'
  end

  def create
    @guinea_pig = GuineaPig.new(guinea_pig_params)
    @guinea_pig.owner_id = current_member.id
    if @guinea_pig.save
      render 'api/guinea_pigs/show'
    else
      render json: @guinea_pig.errors.full_messages, status: 422
    end
  end

  def destroy

  end

  private

  def guinea_pig_params
    params.require(:guinea_pig).permit(:name, :age, :sex)
  end
end